import Icon from "../Icon/Icon.jsx";
import { assetUrl } from "../../utils/helpers.js";
import "./TestimonialCard.css";

function TestimonialCard({ testimonial }) {
  const { name, role, quote, rating = 5, image } = testimonial;

  return (
    <figure className="testimonial">
      <Icon name="quote" className="testimonial__quote" />
      <div className="testimonial__stars" role="img" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }, (_, i) => (
          <Icon key={i} name="star" />
        ))}
      </div>
      <blockquote>{quote}</blockquote>
      <figcaption>
        {image && <img src={assetUrl(image)} alt={name} width="52" height="52" loading="lazy" decoding="async" />}
        <span>
          <strong>{name}</strong>
          <small>{role}</small>
        </span>
      </figcaption>
    </figure>
  );
}

export default TestimonialCard;
