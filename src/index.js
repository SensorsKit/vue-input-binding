const VueInputBinding = {}
const registeredHandlers = []

const log = {
  e(...args) {
    console.error('[vue-input-binding]', ...args)
  }
}
const on = (el, eventName, callback) => {
  el.addEventListener(eventName, callback, false)
  return {
    el,
    destroy: () => el.removeEventListener(eventName, callback, false)
  }
}

const bind = (el, binding, vnode) => {
}

const unbind = el => {
}

const update = (el, binding) => {
}

VueInputBinding.install = function (Vue, options) {
  Vue.directive('on-focus', {
    bind,
    update,
    unbind
  })

  Vue.directive('on-blur', {
    bind,
    update,
    unbind
  })

  Vue.directive('sa-track', {
    bind,
    update,
    unbind
  })
}

export default VueInputBinding
