import type { Guide } from "@/lib/types";
import { guidesA } from "./guides-a";
import { guidesB } from "./guides-b";
import { guidesC } from "./guides-c";

export const guides: Guide[] = [...guidesA, ...guidesB, ...guidesC].sort((a, b) => a.week - b.week);

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
