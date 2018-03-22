global.Range = function Range() {
}

const createContextualFragment = str => JSDOM.fragment(str)

Range.prototype.createContextualFragment = (html) => createContextualFragment(html)

global.window.createRange = function createRange() {
  return {
    setEnd: () => {
    },
    setStart: () => {
    },
    getBoundingClientRect: () => {
      return { right: 0 }
    },
    getClientRects: () => [],
    createContextualFragment
  }
}
