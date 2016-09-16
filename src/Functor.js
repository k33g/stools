const Container = require('./Container.js');

/**
 * Functor
 */
class Functor extends Container {
  /**
   * @param {Object} x is the value of the Functor.
   * @return {Functor}
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
    return new Functor(x);
  }
  /*
    A map function: used for chaining operations on Container
  */
  /**
   * @access public
   * @param {function} fn is a function.
   * @return {Functor}
   */
  map (fn) {
    //return Functor.of(fn(this.value));
    return new this.constructor(fn(this.value));
  }
}
module.exports = Functor
