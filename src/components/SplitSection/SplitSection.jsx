import { assetUrl } from "../../utils/helpers.js";
import "./SplitSection.css";

/** Image on one side, content (children) on the other. Used on Home and About. */
function SplitSection({ image, imageAlt, reverse = false, children }) {
  return (
    <div className={`split ${reverse ? "split--reverse" : ""}`}>
      <div className="split__media">
        <img src={assetUrl(image)} alt={imageAlt} width="1000" height="800" loading="lazy" decoding="async" />
      </div>
      <div className="split__content">{children}</div>
    </div>
  );
}

export default SplitSection;
