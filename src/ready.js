module.exports = {
  domReady: function() {
    var fns = [], listener
      , doc = typeof document === 'object' && document
      , domContentLoaded = 'DOMContentLoaded'
      , loaded = doc && (/^loaded|^i|^c/).test(doc.readyState)
  
    if (!loaded && doc) {
      console.log('aloha')
      doc.addEventListener(domContentLoaded, listener = function () {
        doc.removeEventListener(domContentLoaded, listener)
        loaded = 1
        while (listener = fns.shift()) listener()
      })
    }
  
    return function (fn) {
      loaded ? setTimeout(fn, 0) : fns.push(fn)
    }
  }
}