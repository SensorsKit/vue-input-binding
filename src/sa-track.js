import { log, on, off } from './util'

let sdk = null

export const setSDK = (ref) => {
  sdk = ref
}

export const bind = (el, binding, vnode) => {
  if (!sdk) {
    return log.e('未指定神策 SDK！')
  }

  let enterTime = Date.now()
  let leaveTime = enterTime

  const porperties = {}

  if (el.dataset.label) {
    porperties.InputLabel = el.dataset.label
  }

  on(el, 'focus', () => {
    enterTime = Date.now()
    sdk.track('InputFocus', porperties)
  })

  on(el, 'blur', () => {
    leaveTime = Date.now()
    const stayMSTime = leaveTime - enterTime
    const stayTime = Math.floor(stayMSTime / 1000)
    const porperties = { StayTime: stayTime, StayMSTime: stayMSTime }

    if (el.dataset.label) {
      porperties.InputLabel = el.dataset.label
    }

    sdk.track('InputBlur', porperties)
  })
}

export const update = (el, binding, vnode) => {
}

export const unbind = (el, binding, vnode) => {
  off(el)
}
