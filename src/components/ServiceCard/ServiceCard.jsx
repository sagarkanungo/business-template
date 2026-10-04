import { Link } from "react-router-dom";
import Icon from "../Icon/Icon.jsx";
import { assetUrl } from "../../utils/helpers.js";
import "./ServiceCard.css";

/** One service. Links to the contact form with the service pre-selected. */
function ServiceCard({ service, ctaLabel = "Enquire now" }) {
  return (
    <article className="service-card reveal">
      <div className="service-card__media">
        <img src={assetUrl(service.image)} alt={service.title} width="800" height="600" loading="lazy" decoding="async" />
        <span className="service-card__icon">
          <Icon name={service.icon} />
        </span>
      </div>
      <div className="service-card__body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link to={`/contact?service=${service.id}`} className="service-card__link">
          {ctaLabel} <Icon name="arrow-right" />
        </Link>
      </div>
    </article>
  );
}

export default ServiceCard;
