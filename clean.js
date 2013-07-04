var fields = ['name', 'version', 'from', 'gypfile', 'shasum']

module.exports = function (pkg) {
  var deps = pkg.dependencies
  var _deps = pkg.tree || {}

//  var shasum = pkg.shasum
  for(var k in pkg)
    if(!~fields.indexOf(k))
      delete pkg[k]

//  pkg.shasum = shasum

  for(var k in _deps) {
    _deps[k].from = deps[k]
    clean(_deps[k])
  }

  t.dependencies = _deps

  return t
}
