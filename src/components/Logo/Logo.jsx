import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig.js";
import { assetUrl } from "../../utils/helpers.js";
import "./Logo.css";

/** Logo image + business name. `light` renders white text for dark backgrounds. */
function Logo({ light = false, onClick }) {
  return (
    <Link to="/" className={`logo ${light ? "logo--light" : ""}`} onClick={onClick} aria-label={`${siteConfig.businessName} — home`}>
      {siteConfig.logo && <img className="logo__img" src={assetUrl(siteConfig.logo)} alt="" width="40" height="40" />}
      <span className="logo__name">{siteConfig.businessName}</span>
    </Link>
  );
}

export default Logo;
