/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add some free styles */
import { faTwitter, faDiscord, faYoutube, faFacebook, faLinkedinIn, faInstagram, faTiktok, faReddit, faMeetup } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight, faCaretLeft, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faTwitter, faDiscord, faYoutube, faFacebook, faLinkedinIn, faCaretRight, faCaretLeft, faInstagram, faMeetup, faTiktok, faReddit, faArrowRightLong)
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
