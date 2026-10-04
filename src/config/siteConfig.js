/**
 * SITE CONFIG — the main file to edit for every new client.
 * Business identity, contact details, colours, navigation, social links and SEO.
 * Image paths start with "/" and point to the /public folder.
 */
const siteConfig = {
  // ---------- Identity ----------
  businessName: "Atelier Studio",
  tagline: "Interiors designed around the way you live",
  shortDescription:
    "A boutique interior design studio creating warm, functional and timeless spaces for homes and workplaces.",
  logo: "/logo/logo.svg", // set to "" to show the business name only
  url: "https://www.example.com",

  // ---------- Contact ----------
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // digits only, with country code, no "+"
  whatsappMessage: "Hello Atelier Studio, I would like to know more about your services.",
  email: "hello@ateliersudio.example",
  address: "24 Design District, Vijay Nagar, Indore, Madhya Pradesh 452010, India",

  hours: [
    { days: "Monday – Friday", time: "10:00 AM – 7:00 PM" },
    { days: "Saturday", time: "10:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  // Paste the "src" URL from Google Maps > Share > Embed a map. Leave "" for a placeholder.
  mapEmbedUrl: "",

  // ---------- Social links (icon: instagram | facebook | linkedin | youtube | twitter | pinterest | tiktok) ----------
  social: [
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/" },
    { name: "Facebook", icon: "facebook", url: "https://facebook.com/" },
    { name: "Pinterest", icon: "pinterest", url: "https://pinterest.com/" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/" },
  ],

  // ---------- Theme colours (applied as CSS variables at start-up) ----------
  // Optional extra keys: text, muted, light, border, surface
  colors: {
    primary: "#1E3A34",
    secondary: "#3F6B5E",
    accent: "#A9562A",
  },

  // ---------- Navigation ----------
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ],
  headerCta: { label: "Get a Quote", path: "/contact" },

  // ---------- Footer ----------
  footer: {
    aboutText:
      "We design calm, characterful interiors that balance beauty with everyday function — from first sketch to final styling.",
    servicesLimit: 5, // how many services to list in the footer
  },

  // ---------- SEO (one entry per page) ----------
  seo: {
    home: {
      title: "Atelier Studio | Interior Design & Creative Studio in Indore",
      description:
        "Atelier Studio is a boutique interior design studio in Indore creating warm, functional homes and workplaces. Book a free consultation today.",
    },
    about: {
      title: "About Us",
      description:
        "Learn about Atelier Studio — our story, mission and the design philosophy behind every project we deliver.",
    },
    services: {
      title: "Our Services",
      description:
        "Residential and commercial interior design, space planning, custom furniture, lighting and turnkey renovation services.",
    },
    gallery: {
      title: "Project Gallery",
      description: "Browse our portfolio of living rooms, bedrooms, kitchens and commercial interiors.",
    },
    contact: {
      title: "Contact Us",
      description: "Get in touch with Atelier Studio for a free consultation. Call, WhatsApp, email or send an enquiry.",
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you are looking for could not be found.",
    },
  },
};

export default siteConfig;
