const registeredHandlers = []
let elInfos = []
let debug = false

export const saveElInfo = (el, info) => {
  if (elInfos.filter(o => o.el === el).length) {
    elInfos = elInfos.map(o => {
      if (o.el === el) {
        return {
          el,
          info: {
            ...el.info,
            ...info
          }
        }
      }
      return o
    })
    return
  }
  elInfos.push({
    el,
    info
  })
}

export const getElinfo = (el, key) => {
  const matchedEls = elInfos.filter(o => o.el === el)
  if (!matchedEls.length) {
    return log.e('找不到元素信息：', el, key)
  }

  if (key) {
    return matchedEls[0].info[key]
  }

  return matchedEls[0]
}

export const on = (el, eventName, callback, scope) => {
  el.addEventListener(eventName, callback, false)
  registeredHandlers.push({
    el,
    scope,
    destroy: () => el.removeEventListener(eventName, callback, false)
  })
}

export const off = (el, scope) => {
  if (!registeredHandlers.length) {
    return
  }

  let index = registeredHandlers.length - 1

  while (index >= 0) {
    const handler = registeredHandlers[index]

    if (handler.el === el && handler.scope === scope) {
      handler.destroy()
      registeredHandlers.splice(index, 1)
    }

    index -= 1
  }
}

export const log = {
  setDebugMode(flag) {
    debug = flag
  },

  e(...args) {
    console.error('[vue-input-binding]', ...args)
  },
  d(...args) {
    if (!debug) {
      console.debug(debug)
      return
    }

    console.debug('[vue-input-binding]', ...args)
  }
}

/**
 * 从 el 及其子元素中获取 input 原生元素
 * 如果 el 就是 input，直接返回
 */
export const getInputFromEl = el => {
  if (isInput(el)) {
    return el
  }

  if (el.tagName === 'DIV' && el.querySelector('input')) {
    return el.querySelector('input')
  }

  return null
}

export const isInput = el => el.tagName === 'INPUT'
