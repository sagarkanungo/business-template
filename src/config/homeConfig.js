/**
 * HOME PAGE CONFIG — text and images for the home page sections.
 * icon names are listed in src/utils/icons.js
 */
const homeConfig = {
  hero: {
    eyebrow: "Interior Design Studio · Indore",
    title: "Spaces that feel",
    titleHighlight: "unmistakably yours",
    description:
      "We design homes and workplaces that are calm, characterful and built for everyday life — handled end to end by one dedicated team.",
    primaryCta: { label: "Book a Free Consultation", path: "/contact" },
    secondaryCta: { label: "View Our Work", path: "/gallery" },
    image: "/images/hero/hero-main.svg",
    imageAlt: "A bright, modern living room designed by the studio",
    trust: { value: "4.9/5", label: "Rated by 300+ happy clients" },
  },

  // Scrolling text band under the hero (short words / service names)
  marquee: ["Residential", "Commercial", "Space Planning", "Custom Furniture", "Lighting", "Renovation"],

  stats: [
    { value: "12+", label: "Years of experience" },
    { value: "450+", label: "Projects completed" },
    { value: "98%", label: "Client satisfaction" },
    { value: "25", label: "Design awards" },
  ],

  aboutPreview: {
    eyebrow: "About the studio",
    title: "Thoughtful design, delivered with care",
    text: [
      "Atelier Studio is a team of designers, architects and craftspeople who believe a well-designed space quietly improves everyday life.",
      "We listen first, design second and manage every detail so the finished space feels effortless.",
    ],
    points: ["Personalised design for every budget", "Transparent pricing and timelines", "Dedicated project manager"],
    image: "/images/about/about-1.svg",
    imageAlt: "Designers reviewing material samples in the studio",
    cta: { label: "Our Story", path: "/about" },
  },

  servicesPreview: {
    eyebrow: "What we do",
    title: "Services designed around you",
    subtitle: "From a single room to a complete building, we offer a full range of design and build services.",
    count: 3, // how many services to show (taken from servicesConfig.js)
  },

  whyChoose: {
    eyebrow: "Why choose us",
    title: "A better way to design your space",
    subtitle: "Four reasons clients trust us with their homes and businesses.",
    items: [
      { icon: "pen", title: "Bespoke Design", text: "No templates. Every plan is drawn around your lifestyle and taste." },
      { icon: "shield", title: "Quality Guaranteed", text: "Premium materials and trusted craftspeople, backed by a 2-year warranty." },
      { icon: "clock", title: "On-Time Delivery", text: "Clear milestones and weekly updates keep your project on schedule." },
      { icon: "handshake", title: "One Point of Contact", text: "A single project manager coordinates design, sourcing and installation." },
    ],
  },

  galleryPreview: {
    eyebrow: "Our portfolio",
    title: "Recent projects",
    subtitle: "A look at some of the spaces we have recently completed.",
    count: 6, // how many gallery items to show (taken from galleryConfig.js)
  },

  testimonials: {
    eyebrow: "Testimonials",
    title: "Loved by our clients",
    subtitle: "Real words from people we have had the pleasure of working with.",
    items: [
      {
        name: "Priya Sharma",
        role: "Homeowner",
        quote:
          "The team understood our taste instantly. Our apartment feels bright, calm and completely ours — and the project finished on time.",
        rating: 5,
        image: "/images/testimonials/client-1.svg",
      },
      {
        name: "Rahul Mehta",
        role: "Café Owner",
        quote:
          "They transformed our café into the most talked-about spot in the neighbourhood. Footfall is up and customers love the atmosphere.",
        rating: 5,
        image: "/images/testimonials/client-2.svg",
      },
      {
        name: "Ananya Verma",
        role: "Clinic Director",
        quote:
          "Professional, transparent and creative. They kept us informed at every stage and the final result exceeded expectations.",
        rating: 5,
        image: "/images/testimonials/client-3.svg",
      },
    ],
  },

  cta: {
    title: "Ready to transform your space?",
    text: "Book a free consultation and let us show you what is possible. No obligation, just good ideas.",
    primaryCta: { label: "Get a Free Quote", path: "/contact" },
    secondaryCta: { label: "Chat on WhatsApp", type: "whatsapp" },
  },

  contactPreview: {
    eyebrow: "Get in touch",
    title: "Let's talk about your project",
    text: "Visit our studio, call us or send a message — we usually reply within one working day.",
    cta: { label: "Contact Us", path: "/contact" },
  },
};

export default homeConfig;
