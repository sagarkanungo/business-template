import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../../utils/icons.js";

/** <Icon name="phone" /> — looks the icon up in src/utils/icons.js */
function Icon({ name, className = "", ...rest }) {
  return <FontAwesomeIcon icon={getIcon(name)} className={className} aria-hidden="true" {...rest} />;
}

export default Icon;
