import {
  faArrowRight,
  faAward,
  faBars,
  faBuilding,
  faBullseye,
  faCalendarCheck,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faClock,
  faCouch,
  faEnvelope,
  faEye,
  faHammer,
  faHandshake,
  faHouse,
  faLeaf,
  faLightbulb,
  faLocationDot,
  faPenRuler,
  faPhone,
  faQuoteLeft,
  faRulerCombined,
  faShieldHalved,
  faStar,
  faUsers,
  faWallet,
  faXmark,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
  faTiktok,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

/**
 * Icon registry — config files refer to icons by these string names.
 * To make a new icon available: import it above and add one line below.
 */
const icons = {
  // UI
  "arrow-right": faArrowRight,
  bars: faBars,
  close: faXmark,
  prev: faChevronLeft,
  next: faChevronRight,
  zoom: faMagnifyingGlassPlus,
  quote: faQuoteLeft,
  star: faStar,
  check: faCheck,
  // Contact
  phone: faPhone,
  email: faEnvelope,
  location: faLocationDot,
  clock: faClock,
  whatsapp: faWhatsapp,
  // Social
  instagram: faInstagram,
  facebook: faFacebookF,
  linkedin: faLinkedinIn,
  youtube: faYoutube,
  twitter: faXTwitter,
  pinterest: faPinterestP,
  tiktok: faTiktok,
  // Content / services
  house: faHouse,
  building: faBuilding,
  ruler: faRulerCombined,
  couch: faCouch,
  lightbulb: faLightbulb,
  hammer: faHammer,
  pen: faPenRuler,
  shield: faShieldHalved,
  handshake: faHandshake,
  award: faAward,
  users: faUsers,
  leaf: faLeaf,
  bullseye: faBullseye,
  eye: faEye,
  wallet: faWallet,
  calendar: faCalendarCheck,
};

export const getIcon = (name) => icons[name] || faStar;

export default icons;
