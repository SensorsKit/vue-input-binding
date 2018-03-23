import { log, on, off, saveElInfo } from './util'

const scope = 'on-focus'

export const bind = (el, binding) => {
  log.d('[on-focus] - bind')
  unbind(el)

  const onFocus = binding.value

  if (typeof onFocus !== 'function') {
    return log.e('on-focus 指令需要传入一个函数！')
  }

  let enterTime = Date.now()

  const porperties = {}

  if (el.dataset.label) {
    porperties.InputLabel = el.dataset.label
  }

  on(el, 'focus', () => {
    enterTime = Date.now()
    saveElInfo(el, { enterTime })
    onFocus(porperties)
  }, scope)
}

export const update = (el, binding) => {
  if (binding.value === binding.oldValue) {
    log.d('[on-focus] - update')
    return
  }
  log.d('[on-focus] - update - rebind')
  bind(el, binding)
}

export const unbind = el => {
  log.d('[on-focus] - unbind')
  off(el, scope)
}
