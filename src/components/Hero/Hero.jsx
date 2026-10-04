import Icon from "../Icon/Icon.jsx";
import { CtaButton } from "../Button/Button.jsx";
import { assetUrl } from "../../utils/helpers.js";
import "./Hero.css";

/** Home page hero. All content comes from homeConfig.hero. */
function Hero({ data }) {
  const { eyebrow, title, titleHighlight, description, primaryCta, secondaryCta, image, imageAlt, trust } = data;

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="hero__title">
            {title} {titleHighlight && <span className="hero__highlight">{titleHighlight}</span>}
          </h1>
          <p className="hero__text">{description}</p>
          <div className="hero__actions">
            <CtaButton cta={primaryCta} variant="accent" size="lg" icon="arrow-right" />
            <CtaButton cta={secondaryCta} variant="outline" size="lg" />
          </div>
        </div>

        <div className="hero__media">
          <img src={assetUrl(image)} alt={imageAlt} width="1000" height="1200" fetchPriority="high" />
          {trust && (
            <div className="hero__trust">
              <span className="hero__trust-icon">
                <Icon name="star" />
              </span>
              <div>
                <strong>{trust.value}</strong>
                <span>{trust.label}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
