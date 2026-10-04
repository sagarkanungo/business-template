/**
 * SERVICES CONFIG — add, remove or reorder services here.
 * Every service card, footer list and enquiry-form option is generated from this array.
 * `id` must be unique and URL-friendly (it is used to pre-select the enquiry form).
 */
export const services = [
  {
    id: "residential-design",
    icon: "house",
    title: "Residential Interiors",
    description:
      "Complete interior design for apartments, villas and family homes — layouts, finishes, furniture and styling.",
    image: "/images/services/service-1.svg",
  },
  {
    id: "commercial-design",
    icon: "building",
    title: "Commercial Spaces",
    description:
      "Offices, cafés, clinics and showrooms designed to strengthen your brand and make a lasting impression.",
    image: "/images/services/service-2.svg",
  },
  {
    id: "space-planning",
    icon: "ruler",
    title: "Space Planning",
    description: "Smart layouts that improve flow, storage and natural light, whatever the size of your space.",
    image: "/images/services/service-3.svg",
  },
  {
    id: "custom-furniture",
    icon: "couch",
    title: "Custom Furniture",
    description: "Made-to-measure furniture and joinery crafted by skilled artisans to fit your space exactly.",
    image: "/images/services/service-4.svg",
  },
  {
    id: "lighting-design",
    icon: "lightbulb",
    title: "Lighting Design",
    description: "Layered lighting schemes that set the mood, highlight details and reduce energy use.",
    image: "/images/services/service-5.svg",
  },
  {
    id: "renovation",
    icon: "hammer",
    title: "Renovation Management",
    description: "Turnkey project management covering contractors, timelines and quality control from start to finish.",
    image: "/images/services/service-6.svg",
  },
];

export const servicesPage = {
  hero: {
    eyebrow: "Our services",
    title: "Everything your space needs",
    subtitle: "Design, furnish and build — all under one roof.",
  },
  grid: {
    eyebrow: "What we offer",
    title: "Design services for every need",
    subtitle: "Choose a single service or let us manage the whole project for you.",
    cardCta: "Enquire now",
  },
  benefits: {
    eyebrow: "The benefits",
    title: "Why clients choose to work with us",
    items: [
      { icon: "check", title: "Free Consultation", text: "Your first meeting and initial ideas are on us." },
      { icon: "wallet", title: "Transparent Pricing", text: "Clear quotes with no hidden charges." },
      { icon: "calendar", title: "Fixed Timelines", text: "Agreed milestones so you always know what is next." },
      { icon: "shield", title: "Warranty Included", text: "Workmanship covered for two years after handover." },
    ],
  },
  cta: {
    title: "Not sure which service you need?",
    text: "Tell us about your project and we will recommend the best approach.",
    primaryCta: { label: "Talk to Our Team", path: "/contact" },
    secondaryCta: { label: "Chat on WhatsApp", type: "whatsapp" },
  },
};

export default services;
