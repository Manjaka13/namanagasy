import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
	faHome,
	faPlane,
	faGlobe,
	faEnvelope,
	faBars,
	faHandshake,
	faPhone,
	faMapMarkerAlt,
	faPencilAlt,
	faInfoCircle,
	faShare,
	faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

/*
	Import all icons here
*/

// Manually add fontawesome styles
config.autoAddCss = false;

library.add(
	// Brands
	faFacebook,
	faInstagram,
	// Standard icons
	faHome,
	faPlane,
	faGlobe,
	faEnvelope,
	faBars,
	faHandshake,
	faPhone,
	faMapMarkerAlt,
	faPencilAlt,
	faInfoCircle,
	faShare,
	faExclamationCircle
);
