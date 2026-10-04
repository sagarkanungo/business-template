import Icon from "../Icon/Icon.jsx";
import siteConfig from "../../config/siteConfig.js";
import { mailLink, telLink, whatsappLink } from "../../utils/helpers.js";
import "./ContactInfo.css";

/** Cards for phone, WhatsApp, email and address — all taken from siteConfig.js. */
function ContactInfo({ columns = 1 }) {
  const items = [
    { icon: "phone", label: "Call us", value: siteConfig.phone, href: telLink(siteConfig.phone) },
    {
      icon: "whatsapp",
      label: "WhatsApp",
      value: siteConfig.phone,
      href: siteConfig.whatsapp ? whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMessage) : null,
      external: true,
    },
    { icon: "email", label: "Email", value: siteConfig.email, href: mailLink(siteConfig.email) },
    { icon: "location", label: "Visit us", value: siteConfig.address },
  ];

  return (
    <ul className={`contact-info contact-info--${columns}`}>
      {items.map((item) => (
        <li key={item.label} className="contact-info__item">
          <span className="contact-info__icon">
            <Icon name={item.icon} />
          </span>
          <div>
            <span className="contact-info__label">{item.label}</span>
            {item.href ? (
              <a
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.value}
              </a>
            ) : (
              <span className="contact-info__value">{item.value}</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContactInfo;
