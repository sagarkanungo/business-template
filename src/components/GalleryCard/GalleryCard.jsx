import { Link } from "react-router-dom";
import Icon from "../Icon/Icon.jsx";
import { assetUrl } from "../../utils/helpers.js";
import "./GalleryCard.css";

/**
 * One gallery tile.
 * - pass `to` to make it a link (used on the home page)
 * - pass `onOpen` to make it a button that opens the lightbox (used on the gallery page)
 */
function GalleryCard({ item, to, onOpen }) {
  const inner = (
    <>
      <img src={assetUrl(item.image)} alt={item.alt || item.title} width="900" height="700" loading="lazy" decoding="async" />
      <span className="gallery-card__category">{item.category}</span>
      <span className="gallery-card__overlay">
        <Icon name="zoom" />
        <span>{item.title}</span>
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className="gallery-card" aria-label={`${item.title} — view gallery`}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" className="gallery-card" onClick={onOpen} aria-label={`Open image: ${item.title}`}>
      {inner}
    </button>
  );
}

export default GalleryCard;
