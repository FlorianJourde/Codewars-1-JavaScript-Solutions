// Format With
String.prototype.formatWith = function (...arr) {
  return this.replace(/{[0-9]}/g,v => {
    let num = v.split``[1]*1
    return arr[num]||v
  })
}

String.prototype.formatWith = function (...args) {
  return this.replace(/\{(\d+)\}/g, (s, n) => n < args.length ? args[n] : s)
}
