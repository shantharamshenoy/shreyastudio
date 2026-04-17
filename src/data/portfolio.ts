export type Subcategory = {
  title: string;
  items: { src: string; title: string }[];
};

export type Category = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  pieces: number;
  accent: string; // tailwind gradient class for card glow
  subcategories: Subcategory[];
};

const base = "https://shreya-shenoy.up.railway.app";

export const categories: Category[] = [
  {
    id: "branding",
    number: "01",
    title: "Branding",
    tagline: "Identity systems that stand out and last.",
    description:
      "Logos, packaging, and brand applications crafted to build distinct, memorable identities — focused on clarity, versatility, and shelf-stopping recognition.",
    pieces: 28,
    accent: "from-[oklch(0.45_0.18_295)] to-[oklch(0.3_0.12_310)]",
    subcategories: [
      {
        title: "Logos",
        items: Array.from({ length: 8 }).map((_, i) => ({
          src: `${base}/thumbnails/logo_${i + 1}.jpg`,
          title: `Logo Mark ${i + 1}`,
        })),
      },
      {
        title: "Packaging",
        items: Array.from({ length: 6 }).map((_, i) => ({
          src: `${base}/thumbnails/packaging_${i + 1}.jpg`,
          title: `Packaging ${i + 1}`,
        })),
      },
      {
        title: "Brand Applications",
        items: Array.from({ length: 5 }).map((_, i) => ({
          src: `${base}/thumbnails/brand_${i + 1}.jpg`,
          title: `Brand Application ${i + 1}`,
        })),
      },
    ],
  },
  {
    id: "uiux",
    number: "02",
    title: "UI / UX",
    tagline: "Interfaces that feel intuitive and look inevitable.",
    description:
      "Mobile and web experiences designed end-to-end — from research and flows to polished, production-ready interfaces.",
    pieces: 12,
    accent: "from-[oklch(0.55_0.2_285)] to-[oklch(0.4_0.18_320)]",
    subcategories: [
      {
        title: "Case Studies",
        items: [
          { src: `${base}/thumbnails/Healthy_Me.jpg`, title: "Healthy Me — UX Case Study" },
          { src: `${base}/thumbnails/impressions.jpg`, title: "Multiple Impressions" },
        ],
      },
      {
        title: "Product Screens",
        items: Array.from({ length: 6 }).map((_, i) => ({
          src: `${base}/thumbnails/ui_${i + 1}.jpg`,
          title: `Product Screen ${i + 1}`,
        })),
      },
    ],
  },
  {
    id: "campaigns",
    number: "03",
    title: "Digital Campaigns",
    tagline: "Ideas built to capture attention and convert it.",
    description:
      "Ad campaigns, social creatives, emailers, and print — engineered for impact across fast-scrolling and high-traffic environments.",
    pieces: 25,
    accent: "from-[oklch(0.6_0.22_310)] to-[oklch(0.4_0.16_280)]",
    subcategories: [
      {
        title: "Ad Campaigns",
        items: Array.from({ length: 7 }).map((_, i) => ({
          src: `${base}/thumbnails/ad_${i + 1}.jpg`,
          title: `Campaign ${i + 1}`,
        })),
      },
      {
        title: "Social Media",
        items: Array.from({ length: 9 }).map((_, i) => ({
          src: `${base}/thumbnails/social_${i + 1}.jpg`,
          title: `Social Post ${i + 1}`,
        })),
      },
      {
        title: "Emailers & Print",
        items: Array.from({ length: 6 }).map((_, i) => ({
          src: `${base}/thumbnails/email_${i + 1}.jpg`,
          title: `Emailer ${i + 1}`,
        })),
      },
    ],
  },
];

export const caseStudies = [
  { src: `${base}/thumbnails/Healthy_Me.jpg`, title: "Healthy Me", desc: "UX Case Study — simplifying home cooking." },
  { src: `${base}/thumbnails/impressions.jpg`, title: "Multiple Impressions", desc: "Reimagining the in-gallery art experience." },
  { src: `${base}/thumbnails/5G.jpg`, title: "5G & Edge Computing", desc: "Visualizing the future of connectivity." },
  { src: `${base}/thumbnails/Agentic_AI.jpg`, title: "Agentic AI Whitepaper", desc: "Simplifying the future of AI." },
  { src: `${base}/thumbnails/Beyond_Automation.jpg`, title: "Beyond Automation", desc: "A guide to scalable, intelligent RPA." },
  { src: `${base}/thumbnails/Capita_Case_Study.jpg`, title: "Capita Gen AI", desc: "What CIOs and CTOs need to know." },
  { src: `${base}/thumbnails/Car_Rental.jpg`, title: "Car Rental", desc: "Government partnership case study." },
  { src: `${base}/thumbnails/c2c.jpg`, title: "Connectivity to Capability", desc: "The new economics of Telco data." },
  { src: `${base}/thumbnails/digital_marketplace.jpg`, title: "Digital Marketplaces", desc: "Marketplace-as-a-Service strategy." },
  { src: `${base}/thumbnails/monetization.jpg`, title: "Monetization Playbook", desc: "Clarity in strategy, design in action." },
  { src: `${base}/thumbnails/ai_expo.jpg`, title: "World AI Expo", desc: "Orchestrating Enterprise Intelligence." },
];
