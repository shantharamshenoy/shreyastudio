import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { StackedCards } from "@/components/StackedCards";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Noise } from "@/components/Noise";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreya R Shenoy — Creative Designer · Branding, UI/UX & Campaigns" },
      {
        name: "description",
        content:
          "Premium portfolio of Shreya R Shenoy — branding, packaging, UI/UX and digital campaigns crafted with clarity, intent, and a refined visual language.",
      },
      { property: "og:title", content: "Shreya R Shenoy — Creative Designer" },
      {
        property: "og:description",
        content:
          "Branding, UI/UX, and digital campaigns crafted with clarity and intent.",
      },
      { property: "og:image", content: "https://shreya-shenoy.up.railway.app/images/shreya.jpg" },
      { property: "twitter:image", content: "https://shreya-shenoy.up.railway.app/images/shreya.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Noise />
      <Nav />
      <Hero />
      <About />
      <StackedCards />
      <CaseStudies />
      <Contact />
    </main>
  );
}
