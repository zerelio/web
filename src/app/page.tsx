import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { PlatformHero } from "@/components/platform/PlatformHero";
import { ProductCards } from "@/components/platform/ProductCards";
import { OpenSourceSection } from "@/components/platform/OpenSourceSection";
import { PlatformHowItWorks } from "@/components/platform/PlatformHowItWorks";
import { PlatformCTA } from "@/components/platform/PlatformCTA";

const description =
  "Open-source infrastructure intelligence platform. Discover every resource, map every relationship, enforce every policy — self-hosted.";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Infrastructure Intelligence Platform`,
  description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Infrastructure Intelligence Platform`,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <PlatformHero />
      <ProductCards />
      <OpenSourceSection />
      <PlatformHowItWorks />
      <PlatformCTA />
    </>
  );
}
