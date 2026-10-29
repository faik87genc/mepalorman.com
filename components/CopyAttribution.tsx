"use client";

import { useEffect } from "react";

const MIN_CHARS = 200;
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Appends a source line to long copied text (200+ chars). Short copies, form
 * fields and code are untouched; selection and right-click stay enabled. This
 * is a deterrent only: it cannot stop determined copying.
 */
export default function CopyAttribution() {
  useEffect(() => {
    const onCopy = (e: ClipboardEvent) => {
      const sel = window.getSelection();
      const text = sel?.toString() ?? "";
      if (!sel || text.length < MIN_CHARS || !e.clipboardData) return;
      const el = document.activeElement;
      if (el && /^(INPUT|TEXTAREA)$/.test(el.tagName)) return;
      const url = location.origin + location.pathname;
      const line = `Kaynak: ${url} (MEPAL Orman Ürünleri, MPL-4Q7K-2026)`;
      const box = document.createElement("div");
      for (let i = 0; i < sel.rangeCount; i++) box.appendChild(sel.getRangeAt(i).cloneContents());
      e.clipboardData.setData("text/plain", `${text}\n\n${line}`);
      e.clipboardData.setData("text/html", `${box.innerHTML}<p>${esc(line)}</p>`);
      e.preventDefault();
    };
    document.addEventListener("copy", onCopy);
    return () => document.removeEventListener("copy", onCopy);
  }, []);
  return null;
}
