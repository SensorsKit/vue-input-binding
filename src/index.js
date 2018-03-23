import * as saTrackDirective from './sa-track'
import * as onFocusDirective from './on-focus'
import * as onBlurDirective from './on-blur'
import { log } from './util'
import { version } from '../package.json'

const VueInputBinding = { version }

VueInputBinding.install = function (Vue, options) {
  if (options.sa) {
    saTrackDirective.setSDK(options.sa)
  }

  if (options.debug) {
    log.setDebugMode(true)
  }

  Vue.directive('on-focus', onFocusDirective)

  Vue.directive('on-blur', onBlurDirective)

  Vue.directive('sa-track', saTrackDirective)
}

export default VueInputBinding
