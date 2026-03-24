"use client";

import { useEffect } from "react";

export function ChatWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://admin.aglamaz.com/widget.js";
    script.dataset.api = "https://admin.aglamaz.com";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
