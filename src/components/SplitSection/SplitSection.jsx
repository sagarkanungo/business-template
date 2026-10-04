import { assetUrl } from "../../utils/helpers.js";
import "./SplitSection.css";

/** Image on one side, content (children) on the other. Used on Home and About. */
function SplitSection({ image, imageAlt, reverse = false, children }) {
  return (
    <div className={`split ${reverse ? "split--reverse" : ""}`}>
      <div className={`split__media reveal ${reverse ? "reveal--right" : "reveal--left"}`}>
        <img src={assetUrl(image)} alt={imageAlt} width="1000" height="800" loading="lazy" decoding="async" />
      </div>
      <div className={`split__content reveal ${reverse ? "reveal--left" : "reveal--right"}`}>{children}</div>
    </div>
  );
}

export default SplitSection;
