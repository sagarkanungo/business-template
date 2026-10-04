import Seo from "../components/Seo/Seo.jsx";
import PageHero from "../components/PageHero/PageHero.jsx";
import SectionTitle from "../components/SectionTitle/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard/ServiceCard.jsx";
import FeatureCard from "../components/FeatureCard/FeatureCard.jsx";
import CTASection from "../components/CTASection/CTASection.jsx";
import services, { servicesPage } from "../config/servicesConfig.js";

function Services() {
  const { hero, grid, benefits, cta } = servicesPage;

  return (
    <>
      <Seo page="services" />
      <PageHero {...hero} />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={grid.eyebrow} title={grid.title} subtitle={grid.subtitle} />
          <div className="grid grid--3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} ctaLabel={grid.cardCta} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle eyebrow={benefits.eyebrow} title={benefits.title} />
          <div className="grid grid--4">
            {benefits.items.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection data={cta} />
    </>
  );
}

export default Services;
