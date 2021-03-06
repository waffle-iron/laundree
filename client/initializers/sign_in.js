/**
 * Created by budde on 25/04/16.
 */
var Initializer = require('./initializer')
var FormDecorator = require('../decorators').FormDecorator

class SignInFormInitializer extends Initializer {

  setup (element) {
    var form = element.querySelector('form#SignIn')
    if (!form) return
    var decorator = new FormDecorator(form)
    if (false) console.log(decorator)
  }
}

class SignInInitializer extends Initializer {

  constructor (initLibrary) {
    super(initLibrary)
    initLibrary.registerInitializer(SignInFormInitializer)
  }

  setup (element) {
  }
}

module.exports = SignInInitializer
