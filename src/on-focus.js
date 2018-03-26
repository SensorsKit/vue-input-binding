import { log, on, off, saveElInfo, getInputFromEl } from './util'

const scope = 'on-focus'

export const bind = (el, binding, vnode) => {
  log.d('[on-focus] - bind')

  el = getInputFromEl(el)

  if (!el) {
    return log.e('绑定的元素内未找到 input 标签！')
  }

  unbind(el)

  const onFocus = binding.value

  if (typeof onFocus !== 'function') {
    return log.e('on-focus 指令需要传入一个函数！')
  }

  let enterTime = Date.now()

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
      saveElInfo(el, { enterTime })
      onFocus(properties)
    },
    scope
  )
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
  el = getInputFromEl(el)
  off(el, scope)
}
