import { Link } from "react-router-dom";
import Icon from "../Icon/Icon.jsx";
import siteConfig from "../../config/siteConfig.js";
import { whatsappLink } from "../../utils/helpers.js";
import "./Button.css";

/**
 * Universal button.
 * - `to`   → internal router link
 * - `href` → normal link (external links open in a new tab)
 * - neither → <button>
 * variant: primary | accent | outline | light | ghost     size: md | lg
 */
function Button({ to, href, variant = "primary", size = "md", icon, children, className = "", ...rest }) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}

/** Renders a button from a config object: { label, path } or { label, type: "whatsapp" }. */
export function CtaButton({ cta, ...props }) {
  if (!cta) return null;
  if (cta.type === "whatsapp") {
    return (
      <Button href={whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMessage)} icon="whatsapp" {...props}>
        {cta.label}
      </Button>
    );
  }
  return (
    <Button to={cta.path} {...props}>
      {cta.label}
    </Button>
  );
}

export default Button;
