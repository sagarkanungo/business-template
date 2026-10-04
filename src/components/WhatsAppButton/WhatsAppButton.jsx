import Icon from "../Icon/Icon.jsx";
import siteConfig from "../../config/siteConfig.js";
import { whatsappLink } from "../../utils/helpers.js";
import "./WhatsAppButton.css";

/** Floating WhatsApp chat button. Number and message come from siteConfig.js. */
function WhatsAppButton() {
  if (!siteConfig.whatsapp) return null;

  return (
    <a
      className="whatsapp-btn"
      href={whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <Icon name="whatsapp" />
    </a>
  );
}

export default WhatsAppButton;
