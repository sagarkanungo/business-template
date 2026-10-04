import Seo from "../components/Seo/Seo.jsx";
import Button from "../components/Button/Button.jsx";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <Seo page="notFound" />
      <div className="container not-found__inner">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1>Page not found</h1>
        <p>Sorry, the page you are looking for does not exist or has been moved.</p>
        <div className="not-found__actions">
          <Button to="/" variant="primary" icon="arrow-right">
            Back to Home
          </Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
