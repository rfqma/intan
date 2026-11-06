import type { Metadata } from "next";

import NyambutGaweCaseStudy from "@/components/nyambut-gawe-case-study";

export const metadata: Metadata = {
  title: "Nyambut Gawe Website — Intan Nuraini",
  description: "Nyambut Gawe Website UI/UX case study by Intan Nuraini.",
};

export default function Page() {
  return <NyambutGaweCaseStudy />;
}
