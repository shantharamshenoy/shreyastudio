export type Subcategory = {
  title: string;
  items: { src: string; title: string }[];
  description?: string;
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
const branding_base = "/images/branding/";
const packaging_base = "/images/packaging/";
const uiux_base = "/images/uiux/";
const campaigns_base = "/images/campaigns/";
const case_studies_base = "/images/case_studies/";
const video_base = "/videos/";
const docs_base = "/docs/";

export const categories: Category[] = [
  {
    id: "packaging",
    number: "01",
    title: "Packaging Design",
    tagline: "Distinct on the shelf. Clear in purpose.",
    description:
      "Packaging has maybe a second to make an impression - and in that second, it needs to say a lot. These are concepts I've designed with that in mind. Balancing what looks good on a shelf with what actually communicates the product, the brand, and the feeling behind it.",
    pieces: 11,
    accent: "from-[oklch(0.45_0.18_295)] to-[oklch(0.3_0.12_310)]",
    subcategories: [
      {
        title: "Packaging",
        items: Array.from({ length: 11 }).map((_, i) => ({
          src: `${packaging_base}/packaging_${i + 1}.jpg`,
          title: `Packaging ${i + 1}`,
        })),
      },
    ],
  },
  {
    id: "branding",
    number: "02",
    title: "Brand Identity",
    tagline: "Built as identities. Extended through design.",
    description:
      "Brand identity, to me, is more than a logo. It's the system behind it, how it behaves on a package, a poster, a screen, or a storefront. I enjoy the process of building that system from the ground up and then stretching it across the places it needs to live. Designing brand identities and carrying them across real-world applications, ensuring consistency, clarity, and adaptability across touch-points. The work focuses on creating systems that are not only visually distinct but also functional across formats.",
    pieces: 15,
    accent: "from-[oklch(0.45_0.18_295)] to-[oklch(0.3_0.12_310)]",
    subcategories: [
      {
        title: "Logos",
        items: Array.from({ length: 7 }).map((_, i) => ({
          src: `${branding_base}/logo_design/logo_design_${i + 1}.jpg`,
          title: `Logo Mark ${i + 1}`,
        })),
      },
      {
        title: "Brand Applications",
        items: Array.from({ length: 8 }).map((_, i) => ({
          src: `${branding_base}/brand_applications/brand_applications_${i + 1}.jpg`,
          title: `Brand Application ${i + 1}`,
        })),
      },
    ],
  },
  
  {
    id: "case-studies",
    number: "04",
    title: "Case Study & POVs",
    tagline: "Designing for clarity across formats.",
    description:
      "Where the work meets the thinking. Case studies, perspectives, and everything in between.",
    pieces: 5,
    accent: "from-[oklch(0.6_0.22_310)] to-[oklch(0.4_0.16_280)]",
    subcategories: [
      {
        title: "Customer Care Case Study",
        items: Array.from({ length: 8 }).map((_, i) => ({
          src: `${case_studies_base}/customer_care/image_${i + 1}.jpg`,
          title: `Customer Care ${i + 1}`,
        })),
      },
      {
        title: "Connectivity to Capability Case Study",
        items: Array.from({ length: 15 }).map((_, i) => ({
          src: `${case_studies_base}/c2c/image_${i + 1}.jpg`,
          title: `Campaign ${i + 1}`,
        })),
      },
      {
        title: "TARS Case Study",
        items: Array.from({ length: 11 }).map((_, i) => ({
          src: `${case_studies_base}/tars/tars_${i + 1}.jpg`,
          title: `TARS ${i + 1}`,
        })),
      },
      {
        title: "Beyond Automation",
        items: Array.from({ length: 23 }).map((_, i) => ({
          src: `${case_studies_base}/automation/image_${i + 1}.jpg`,
          title: `Newspaper Ad ${i + 1}`,
        })),
      },
      {
        title: "Agentic AI Case Study",
        items: Array.from({ length: 34 }).map((_, i) => ({
          src: `${case_studies_base}/agentic_ai/image_${i + 1}.jpg`,
          title: `Emailer ${i + 1}`,
        })),
      },
    ],
  },
  {
    id: "campaigns",
    number: "04",
    title: "Communication Design",
    tagline: "Designing for clarity across formats.",
    description:
      "A collection of work spanning campaigns, print, and digital communication, built to present information clearly and effectively across different formats and audiences.",
    pieces: 19,
    accent: "from-[oklch(0.6_0.22_310)] to-[oklch(0.4_0.16_280)]",
    subcategories: [
      {
        title: "Social Media",
        items: Array.from({ length: 7 }).map((_, i) => ({
          src: `${campaigns_base}/social_media/social_media_${i + 1}.jpg`,
          title: `Social Post ${i + 1}`,
        })),
      },
      {
        title: "Ad Campaigns",
        items: Array.from({ length: 8 }).map((_, i) => ({
          src: `${campaigns_base}/ad_campaigns/ad_campaigns_${i + 1}.jpg`,
          title: `Campaign ${i + 1}`,
        })),
      },
      {
        title: "Emailers & Print",
        items: Array.from({ length: 4 }).map((_, i) => ({
          src: `${campaigns_base}/emailers/emailers_${i + 1}.jpg`,
          title: `Emailer ${i + 1}`,
        })),
      },
      {
        title: "Print Media",
        items: Array.from({ length: 3 }).map((_, i) => ({
          src: `${campaigns_base}/newspaper_ads/newspaper_ads_${i + 1}.jpg`,
          title: `Newspaper Ad ${i + 1}`,
        })),
      },
    ],
  },
  {
    id: "uiux",
    number: "05",
    title: "UI/UX Design",
    tagline: "Clarity through structure. Impact through design.",
    description:
      "A collection of UX case studies and product screens I've worked on, each one starting with a real problem and ending with something people actually enjoy using. I care about systems that make sense and interfaces that don't get in the way.",
    pieces: 12,
    accent: "from-[oklch(0.55_0.2_285)] to-[oklch(0.4_0.18_320)]",
    subcategories: [
      {
        title: "Multiple Impressions - UI/UX Case Study",
        description: "Re-imagining the in-gallery art experience.",
        items: Array.from({ length: 17 }).map((_, i) => ({
          src: `${uiux_base}/multiple_impressions/multiple_impressions_${i + 1}.jpg`,
          title: `Multiple Impressions - Page  ${i + 1}`,
        })),
      },
      {
        title: "HealthyMe - UI/UX Case Study",
        items: Array.from({ length: 16 }).map((_, i) => ({
          src: `${uiux_base}/healthy_me/healthy_me_${i + 1}.jpg`,
          title: `HealthyMe - Page  ${i + 1}`,
        })),
      },
      // {
      //   title: "Product Screens",
      //   items: Array.from({ length: 6 }).map((_, i) => ({
      //     src: `${uiux_base}/thumbnails/ui_${i + 1}.jpg`,
      //     title: `Product Screen ${i + 1}`,
      //   })),
      // },
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
