import { CtaButton } from "../Button/Button.jsx";
import "./CTASection.css";

/** Full-width call-to-action band. data: { title, text, primaryCta, secondaryCta } */
function CTASection({ data }) {
  return (
    <section className="cta">
      <div className="container cta__inner reveal reveal--zoom">
        <h2>{data.title}</h2>
        {data.text && <p>{data.text}</p>}
        <div className="cta__actions">
          <CtaButton cta={data.primaryCta} variant="accent" size="lg" icon="arrow-right" />
          <CtaButton cta={data.secondaryCta} variant="ghost" size="lg" />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
