//const Monad = require('./Monad.js');
const Functor = require('./Functor.js');

/**
 * Left
 */
class Left extends Functor {
  /**
   * @param {Object} x is the value of the Left.
   * @return {Left}
   */
  constructor(x) {
    super(x);
  }
  // overrides Functor.map
  /**
   * @access public
   * @return {Left}
   */
  map() {
    return this;
  }
  /**
   * @access public
   * @param {Object} value is an object.
   * @return {Object}
   */
  getOrElse(value) {
    return value;
  }
  /**
   * @access public
   * @return {boolean}
   */
  isLeft() {
    return true;
  }
  /**
   * @access public
   * @return {boolean}
   */
  isRight() {
    return false;
  }
  /**
   * @access public
   * @param {function} leftFn is a function.
   * @param {function} rightFn is a function.
   * @return {Object}
   */
  cata(leftFn, rightFn) {
    return leftFn(this.value);
  }

}
module.exports = Left
