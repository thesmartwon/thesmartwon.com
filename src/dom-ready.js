/* eslint-disable */
let ie10 = false;
if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
  ie10 = true;
}

let callbacks = [], listener
  , doc = typeof document === 'object' && document
  , hack = ie10 ? doc.documentElement.doScroll() : doc.documentElement.doScroll
  , domContentLoaded = 'DOMContentLoaded'
  , loaded = doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


if (!loaded && doc) {
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = callbacks.shift()) listener()
  })
}

export default function(callback) {
  loaded ? setTimeout(callback, 0) : callbacks.push(callback)
}
