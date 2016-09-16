const Functor = require('./Functor.js');

/**
 * Monad
 * Yo Ma! I'm a Monad
 */
class Monad extends Functor {
  /**
   * @param {Object} x is the value of the Monad.
   * @return {Monad}
   */
  constructor(x) {
    super(x);
  }
  /**
   * @access public
   * @param {Object} x is the value of the Container.
   * @return {Container}
   */
  static of(x) {
    return new Monad(x);
  }
  /* map (fn) { return Monad.of(fn(this.value)); } */

  /* So, I'm a monad because I have a bind method */
  /*
    A map function: used for chaining operations on Container
  */
  /**
   * @access public
   * @param {function} fn is a function.
   * @return {Object}
   */
  bind (fn) {
    return fn(this.value);
  }
}
module.exports = Monad
