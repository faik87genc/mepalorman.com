"use client";

import { useEffect, useState } from "react";

type Choice = { analytics: boolean; marketing: boolean };
const KEY = "mepal-consent-v1";
const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function load(): Choice | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Choice) : null;
  } catch {
    return null;
  }
}

function loadGa(id: string) {
  if (document.getElementById("ga4")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
  const s = document.createElement("script");
  s.id = "ga4";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
}

/**
 * Category-based consent banner. Nothing is measured before the visitor
 * accepts analytics; GA4 is loaded lazily, and only when NEXT_PUBLIC_GA4_ID is
 * set. Also forwards click events (tel / WhatsApp) once analytics is allowed.
 */
export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [detail, setDetail] = useState(false);

  useEffect(() => {
    const c = load();
    const t = window.setTimeout(() => {
      if (!c) setOpen(true);
      else if (c.analytics && GA_ID) loadGa(GA_ID);
    }, 800);
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-evt],[data-cookie-open]");
      if (!el) return;
      if (el.hasAttribute("data-cookie-open")) {
        const cur = load();
        setAnalytics(!!cur?.analytics);
        setMarketing(!!cur?.marketing);
        setDetail(true);
        setOpen(true);
        return;
      }
      const cur = load();
      if (cur?.analytics && window.gtag) window.gtag("event", el.dataset.evt, { source: el.dataset.src ?? "", page_path: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("click", onClick);
    };
  }, []);

  function save(c: Choice) {
    try {
      localStorage.setItem(KEY, JSON.stringify(c));
    } catch {
      /* storage blocked: choice applies to this visit only */
    }
    if (c.analytics && GA_ID) loadGa(GA_ID);
    setOpen(false);
  }

  if (!open) return null;
  return (
    <div className="consent" role="dialog" aria-modal="false" aria-label="Çerez tercihleri">
      <p>
        Siteyi çalıştırmak için zorunlu çerezler kullanıyoruz. İzin verirseniz ziyaret istatistikleri için analitik çerezler de kullanırız. Ayrıntı:{" "}
        <a href="/cerez-politikasi/">Çerez politikası</a>.
      </p>
      {detail && (
        <div className="consent-detail">
          <label>
            <input type="checkbox" checked disabled /> Zorunlu (her zaman açık)
          </label>
          <label>
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} /> Analitik
          </label>
          <label>
            <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} /> Pazarlama
          </label>
        </div>
      )}
      <div className="consent-actions">
        <button type="button" className="btn btn-sm btn-gold" onClick={() => save({ analytics: true, marketing: true })}>
          Tümünü kabul et
        </button>
        {detail ? (
          <button type="button" className="btn btn-sm btn-ghost" onClick={() => save({ analytics, marketing })}>
            Seçimi kaydet
          </button>
        ) : (
          <button type="button" className="btn btn-sm btn-ghost" onClick={() => setDetail(true)}>
            Tercihleri seç
          </button>
        )}
        <button type="button" className="btn btn-sm btn-ghost" onClick={() => save({ analytics: false, marketing: false })}>
          Yalnızca zorunlu
        </button>
      </div>
    </div>
  );
}
