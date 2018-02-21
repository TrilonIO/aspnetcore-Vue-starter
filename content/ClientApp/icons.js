import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

//'@fortawesome/fontawesome-free-solid' // We can select icons 1 by 1 if needed
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import { faHome, faGraduationCap, faList } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(
  faSpinner, 
  faHome, 
  faGraduationCap,
  faList,
)

export {
  FontAwesomeIcon
}
