export default {
  setItem,
  getItem,
  removeItem,
  clear,
  getLength
}

function setItem (key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// TODO 这里默认从json转换了
function getItem (key) {
  var item = window.localStorage.getItem(key)
  if (_isJSON(item)) {
    item = JSON.parse(item)
  }
  return item
}

function removeItem (key) {
  var item = window.localStorage.getItem(key)
  if (item) {
    window.localStorage.removeItem(key)
    return true
  } else {
    return false
  }
}

function clear () {
  return window.localStorage.clear()
}

function getLength () {
  return window.localStorage.length
}

function _isJSON (item) {
  return /(\[|\{).*(\]|\})/.test(item)
}
