/**
 * GALLERY CONFIG — replace image / title / category here.
 * Filter buttons on the Gallery page are generated automatically from the categories used below.
 */
export const galleryItems = [
  { id: 1, title: "Sunlit Family Lounge", category: "Living Rooms", image: "/images/gallery/gallery-1.svg", alt: "Bright family living room with a green sofa" },
  { id: 2, title: "Quiet Retreat Suite", category: "Bedrooms", image: "/images/gallery/gallery-2.svg", alt: "Calm bedroom with soft neutral tones" },
  { id: 3, title: "Terracotta Kitchen", category: "Kitchens", image: "/images/gallery/gallery-3.svg", alt: "Modern kitchen with terracotta accents" },
  { id: 4, title: "Studio Café", category: "Commercial", image: "/images/gallery/gallery-4.svg", alt: "Contemporary café interior" },
  { id: 5, title: "Garden View Living", category: "Living Rooms", image: "/images/gallery/gallery-5.svg", alt: "Living room with a large garden window" },
  { id: 6, title: "Layered Neutrals", category: "Bedrooms", image: "/images/gallery/gallery-6.svg", alt: "Bedroom with layered neutral textiles" },
  { id: 7, title: "Open-Plan Cooking", category: "Kitchens", image: "/images/gallery/gallery-7.svg", alt: "Open-plan kitchen and dining area" },
  { id: 8, title: "Creative Workspace", category: "Commercial", image: "/images/gallery/gallery-8.svg", alt: "Modern office with warm wood finishes" },
  { id: 9, title: "Evening Lounge", category: "Living Rooms", image: "/images/gallery/gallery-9.svg", alt: "Cosy living room lit for the evening" },
];

export const galleryPage = {
  hero: {
    eyebrow: "Portfolio",
    title: "Our work, up close",
    subtitle: "A selection of homes and workplaces we have designed and delivered.",
  },
  allLabel: "All",
  cta: {
    title: "Love what you see?",
    text: "Let's design a space you will love just as much.",
    primaryCta: { label: "Start Your Project", path: "/contact" },
    secondaryCta: { label: "Chat on WhatsApp", type: "whatsapp" },
  },
};

export default galleryItems;
