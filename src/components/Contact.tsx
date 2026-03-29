"use client";

import { useEffect } from "react";

export function ChatWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    const isLocal = window.location.hostname === "localhost";
    const apiBase = isLocal ? "http://localhost:3021" : "https://admin.aglamaz.com";
    script.src = `${apiBase}/widget.js`;
    script.dataset.api = apiBase;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
