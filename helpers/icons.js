import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
	faFacebook,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
	faUser,
	faHome,
	faPlane,
	faGlobe,
	faEnvelope,
	faBars,
	faPencilAlt,
	faInfoCircle,
	faShare,
	faCar,
	faCalendarAlt,
	faMapMarkerAlt,
	faTimesCircle,
	faExclamationCircle,
	faPhone,
	faHandshake
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
	faUser,
	faHome,
	faPlane,
	faGlobe,
	faEnvelope,
	faBars,
	faPencilAlt,
	faInfoCircle,
	faShare,
	faCar,
	faCalendarAlt,
	faMapMarkerAlt,
	faTimesCircle,
	faExclamationCircle,
	faPhone,
	faHandshake
);
