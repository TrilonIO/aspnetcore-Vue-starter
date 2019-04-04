import { library } from '@fortawesome/fontawesome-svg-core'
// Official documentation available at: https://github.com/FortAwesome/vue-fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// If not present, it won't be visible within the application. Considering that you
// don't want all the icons for no reason. This is a good way to avoid importing too many
// unnecessary things.
library.add(
  require('@fortawesome/free-solid-svg-icons').faEnvelope,
  require('@fortawesome/free-solid-svg-icons').faHeart,
  require('@fortawesome/free-solid-svg-icons').faGraduationCap,
  require('@fortawesome/free-solid-svg-icons').faHome,
  require('@fortawesome/free-solid-svg-icons').faInfo,
  require('@fortawesome/free-solid-svg-icons').faList,
  require('@fortawesome/free-solid-svg-icons').faSpinner,
  // Brands
  require('@fortawesome/free-brands-svg-icons').faFontAwesome,
  require('@fortawesome/free-brands-svg-icons').faMicrosoft,
  require('@fortawesome/free-brands-svg-icons').faVuejs
)

export {
  FontAwesomeIcon
}
