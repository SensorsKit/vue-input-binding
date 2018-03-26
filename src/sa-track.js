import { log, on, off, getInputFromEl } from './util'

const scope = 'sa-track'
let sdk = null

export const setSDK = ref => (sdk = ref)

export const bind = (el, binding, vnode) => {
  log.d('[sa-track] - bind')

  el = getInputFromEl(el)

  if (!el) {
    return log.e('绑定的元素内未找到 input 标签！')
  }

  if (!sdk) {
    return log.e('未指定神策 SDK！')
  }

  let enterTime = Date.now()
  let leaveTime = enterTime

  const properties = {}

  if (vnode.componentInstance && vnode.componentInstance.title) {
    properties.InputLabel = vnode.componentInstance.title
  }

  if (el.dataset.label) {
    properties.InputLabel = el.dataset.label
  }

  on(
    el,
    'focus',
    () => {
      enterTime = Date.now()
      sdk.track('InputFocus', properties)
    },
    scope
  )

  on(
    el,
    'blur',
    () => {
      leaveTime = Date.now()
      const stayMSTime = leaveTime - enterTime
      const stayTime = Math.floor(stayMSTime / 1000)
      const properties = { StayTime: stayTime, StayMSTime: stayMSTime }

      if (vnode.componentInstance && vnode.componentInstance.title) {
        properties.InputLabel = vnode.componentInstance.title
      }

      if (el.dataset.label) {
        properties.InputLabel = el.dataset.label
      }

      sdk.track('InputBlur', properties)
    },
    scope
  )
}

export const update = () => {
  log.d('[sa-track] - update')
}

export const unbind = el => {
  log.d('[sa-track] - unbind')
  el = getInputFromEl(el)
  off(el, scope)
}
