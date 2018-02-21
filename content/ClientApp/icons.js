import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

// Official documentation available at: https://github.com/FortAwesome/vue-fontawesome
import { faHome, faGraduationCap, faList, faSpinner } from '@fortawesome/fontawesome-free-solid'

// If not present, it won't be visible within the application. Considering that you
// don't want all the icons for no reason. This is a good way to avoid importing too many
// unnecessary things.
fontawesome.library.add(
  faSpinner, 
  faHome, 
  faGraduationCap,
  faList,
)

export {
  FontAwesomeIcon
}
