import Seo from "../components/Seo/Seo.jsx";
import PageHero from "../components/PageHero/PageHero.jsx";
import SplitSection from "../components/SplitSection/SplitSection.jsx";
import SectionTitle from "../components/SectionTitle/SectionTitle.jsx";
import FeatureCard from "../components/FeatureCard/FeatureCard.jsx";
import StatsBar from "../components/StatsBar/StatsBar.jsx";
import CTASection from "../components/CTASection/CTASection.jsx";
import Icon from "../components/Icon/Icon.jsx";
import aboutConfig from "../config/aboutConfig.js";
import "./About.css";

function About() {
  const { hero, intro, story, mission, vision, values, stats, cta } = aboutConfig;

  return (
    <>
      <Seo page="about" />
      <PageHero {...hero} />

      <section className="section">
        <div className="container">
          <SplitSection image={intro.image} imageAlt={intro.imageAlt} reverse>
            <span className="eyebrow">{intro.eyebrow}</span>
            <h2>{intro.title}</h2>
            {intro.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SplitSection>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container about-story">
          <div>
            <span className="eyebrow">{story.eyebrow}</span>
            <h2>{story.title}</h2>
          </div>
          <div className="about-story__text">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--2">
          {[mission, vision].map((item) => (
            <article className="about-card" key={item.title}>
              <span className="about-card__icon">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle eyebrow={values.eyebrow} title={values.title} />
          <div className="grid grid--4">
            {values.items.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark about-stats">
        <StatsBar stats={stats} variant="plain" />
      </section>

      <CTASection data={cta} />
    </>
  );
}

export default About;
