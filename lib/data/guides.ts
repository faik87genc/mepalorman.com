import type { Guide } from "@/lib/types";
import { guidesA } from "./guides-a";
import { guidesB } from "./guides-b";

export const guides: Guide[] = [...guidesA, ...guidesB].sort((a, b) => a.week - b.week);

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
