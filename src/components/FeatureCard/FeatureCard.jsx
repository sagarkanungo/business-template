import Icon from "../Icon/Icon.jsx";
import "./FeatureCard.css";

/** Icon + title + text card. variant: light | dark (for dark sections) */
function FeatureCard({ icon, title, text, variant = "light" }) {
  return (
    <article className={`feature-card feature-card--${variant}`}>
      <span className="feature-card__icon">
        <Icon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default FeatureCard;
