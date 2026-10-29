export type FAQ = { q: string; a: string };

export type Table = { caption?: string; head: string[]; rows: string[][] };

/** One H2 block of a page. All fields except `h` are optional and render in this order. */
export type Section = {
  h: string;
  p?: string[];
  list?: string[];
  /** Numbered list (steps). */
  steps?: string[];
  table?: Table;
  /** Internal links shown under the section: [label, href]. */
  links?: [string, string][];
};

/** Which built-in SVG illustration a page uses (no stock/foreign photos). */
export type ArtKind = "euro" | "wood" | "plastic" | "used" | "scrap" | "big" | "custom" | "ispm" | "crate" | "cp" | "truck" | "container" | "region" | "service";

type Base = {
  slug: string;
  /** <title>, <= 60 chars. */
  title: string;
  /** meta description, <= 155 chars. */
  description: string;
  h1: string;
  /** 2-3 sentence direct answer shown at the top (AI/AEO block). */
  answer: string;
  keyword: string;
  sections: Section[];
  faq: FAQ[];
  art: ArtKind;
};

export type Product = Base & {
  name: string;
  /** Key into lib/data/prices.ts rows; omitted when the item is quote-only. */
  priceRow?: string;
  specs: [string, string][];
  uses: string[];
  related: string[];
  guides: string[];
  /** Short card blurb for listings. */
  blurb: string;
};

export type Service = Base & { name: string; blurb: string; related: string[]; guides: string[] };

export type Region = Base & {
  name: string;
  wave: 1 | 2 | 3;
  /** Neutral dispatch note shown on cards and page header (no km/minute claims). */
  distance: string;
  zones: string[];
  blurb: string;
  nearby: string[];
};

export type Sector = Base & { name: string; blurb: string; products: string[] };

export type Guide = Base & {
  /** ISO date (yyyy-mm-dd). */
  published: string;
  updated: string;
  week: number;
  related: string[];
  readMinutes: number;
};
