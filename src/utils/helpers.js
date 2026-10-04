/** Resolve a /public path so images work even when the site is deployed in a sub-folder. */
export const assetUrl = (path) => {
  if (!path) return "";
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};

export const telLink = (phone) => `tel:${String(phone).replace(/[^\d+]/g, "")}`;

export const mailLink = (email, subject = "", body = "") => {
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${email}${params.length ? `?${params.join("&")}` : ""}`;
};

export const whatsappLink = (number, message = "") =>
  `https://wa.me/${String(number).replace(/\D/g, "")}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

/** Copies siteConfig.colors into CSS variables, e.g. { primary } -> --primary. */
export const applyTheme = (colors = {}) => {
  const root = document.documentElement;
  Object.entries(colors).forEach(([key, value]) => {
    if (value) root.style.setProperty(`--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`, value);
  });
};
