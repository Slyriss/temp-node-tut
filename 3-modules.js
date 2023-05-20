//modules
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')
const { singlePerson } = require('./6-alternative-flavors')
require('./7-mind-grenade')

sayHi('susan')
sayHi(singlePerson)
sayHi(names.peter)