const registeredHandlers = []

export const on = (el, eventName, callback) => {
  el.addEventListener(eventName, callback, false)
  registeredHandlers.push({
    el,
    destroy: () => el.removeEventListener(eventName, callback, false)
  })
}

export const off = el => {
  if (!registeredHandlers.length) {
    return
  }

  let index = registeredHandlers.length - 1

  while (index >= 0) {
    const handler = registeredHandlers[index]

    if (handler.el === el) {
      handler.destroy()
      registeredHandlers.splice(index, 1)
    }

    index -= 1
  }
}

export const log = {
  e(...args) {
    console.error('[vue-input-binding]', ...args)
  },
  d(...args) {
    if (process.env.NODE_ENV === 'production') {
      return
    }
    console.debug('[vue-input-binding]', ...args)
  }
}
