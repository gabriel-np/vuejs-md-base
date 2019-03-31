import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'english',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('english').create({
      phrase: 'You have a {f} friend requests and {l} new messages',
      msg: 'Hello my friend'
    }),
    new MLanguage('français').create({
      phrase: 'Vous avez {f} demandes d\'amis et {l} nouveaux messages',
      msg: 'Bonjour mon ami'
    })
  ]
})
