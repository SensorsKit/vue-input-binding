import Vue from 'vue'
import App from './App'
import VueInputBinding from '../src/index'

const hostname = window.location.hostname

if (
  isMobile() && (
    hostname === 'localhost' ||
    !Number.isNaN(Number(hostname.split('.').join('')))
  )
) {
  import('vconsole').then(result => {
    const VConsole = result.default
    /* eslint-disable no-new */
    new VConsole()
  })
}

Vue.use(VueInputBinding, {
  debug: true,
  sa: {
    track(...args) {
      console.log('[track]', ...args)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

function isMobile() {
  return window.navigator.userAgent.indexOf('iPhone') > -1 ||
    window.navigator.userAgent.indexOf('Android') > -1 ||
    window.navigator.userAgent.indexOf('Mobile') > -1
}
