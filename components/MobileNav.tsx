"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mobil menü: yerel <details> davranışı korunur; Esc ile kapanır ve odak
 * düğmeye döner, menü dışına tıklayınca / bağlantıya basınca kapanır.
 */
export default function MobileNav({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !open) return;
    const close = (focusBack: boolean) => {
      el.open = false;
      if (focusBack) el.querySelector("summary")?.focus();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    const onDown = (e: PointerEvent) => {
      if (!el.contains(e.target as Node)) close(false);
    };
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("nav a")) close(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    el.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
      el.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <details ref={ref} className="nav-mobile" onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}>
      <summary aria-label={open ? "Menüyü kapat" : "Menüyü aç"}>
        <span className="burger" aria-hidden="true" />
      </summary>
      {children}
    </details>
  );
}
