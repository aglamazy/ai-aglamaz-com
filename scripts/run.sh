#!/bin/bash

# Run ai-aglamaz-com dev server
# Kills previous instance, rotates logs, tees output to run.log
#
# Usage: ./scripts/run.sh [headless]
#   headless = no TTY/tee, just redirect to run.log (for background use)

HEADLESS=false
PORT=3030

for arg in "$@"; do
  case "$arg" in
    headless) HEADLESS=true ;;
  esac
done

# Resolve symlinks to find the real script location
cd "$(dirname "$(readlink -f "$0")")/.."

# Kill any existing process on our port
EXISTING_PID=$(lsof -ti:$PORT 2>/dev/null)
if [ ! -z "$EXISTING_PID" ]; then
  echo "Killing existing process on port $PORT (PID: $EXISTING_PID)"
  kill -9 $EXISTING_PID 2>/dev/null
  sleep 1
fi

# Rotate logs (keep last 4 runs)
[ -f run.4.log ] && rm run.4.log
for i in 3 2 1; do
  [ -f "run.$i.log" ] && mv "run.$i.log" "run.$((i + 1)).log"
done
[ -f run.log ] && mv run.log run.1.log

echo "Starting ai-aglamaz-com on port $PORT..."

if [ "$HEADLESS" = true ]; then
  npm run dev > run.log 2>&1
else
  script -q -e -c "npm run dev" /dev/null \
    2>&1 | tee >(sed -u -r 's/\x1B\[[0-9;]*[ -/]*[@-~]//g' > run.log)
fi
