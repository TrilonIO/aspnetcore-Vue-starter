import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

// Official documentation available at: https://github.com/FortAwesome/vue-fontawesome
import { faEnvelope, faHome, faGraduationCap, faList, faSpinner } from '@fortawesome/fontawesome-free-solid'
import { faMicrosoft, faVuejs, faFontAwesome } from '@fortawesome/fontawesome-free-brands'

// If not present, it won't be visible within the application. Considering that you
// don't want all the icons for no reason. This is a good way to avoid importing too many
// unnecessary things.
fontawesome.library.add(
  faEnvelope,
  faGraduationCap,
  faHome, 
  faList,
  faSpinner, 
  // Brands
  faFontAwesome,
  faMicrosoft, 
  faVuejs,
)

export {
  FontAwesomeIcon
}
