import * as saTrackDirective from './sa-track'
import * as onFocusDirective from './on-focus'
import * as onBlurDirective from './on-blur'

const VueInputBinding = {}

VueInputBinding.install = function (Vue, options) {
  if (options.sa) {
    saTrackDirective.setSDK(options.sa)
  }

  Vue.directive('on-focus', onFocusDirective)

  Vue.directive('on-blur', onBlurDirective)

  Vue.directive('sa-track', saTrackDirective)
}

export default VueInputBinding
