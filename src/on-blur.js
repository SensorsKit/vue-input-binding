import { log, on, off, getElinfo } from './util'

const scope = 'on-blur'

export const bind = (el, binding) => {
  log.d('[on-blur] - bind')
  unbind(el)

  const onBlur = binding.value

  if (typeof onBlur !== 'function') {
    return log.e('on-blur 指令需要传入一个函数！')
  }

  const porperties = {}

  if (el.dataset.label) {
    porperties.InputLabel = el.dataset.label
  }

  on(el, 'blur', () => {
    const leaveTime = Date.now()
    const enterTime = getElinfo(el, 'enterTime')

    if (!enterTime) {
      log.e('元素没有取到聚焦时间')
    }

    const stayMSTime = leaveTime - enterTime
    const stayTime = Math.floor(stayMSTime / 1000)
    const porperties = { stayTime, stayMSTime }

    if (el.dataset.label) {
      porperties.InputLabel = el.dataset.label
    }

    onBlur(porperties)
  }, scope)
}

export const update = (el, binding) => {
  if (binding.value === binding.oldValue) {
    log.d('[on-blur] - update')
    return
  }
  log.d('[on-blur] - update - rebind')
  bind(el, binding)
}

export const unbind = el => {
  log.d('[on-blur] - unbind')
  off(el, scope)
}
