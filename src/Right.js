//const Monad = require('./Monad.js');
const Functor = require('./Functor.js');

/**
 * Right
 * a sub-type of Either
 */
class Right extends Functor {
  /**
   * @param {Object} x is the value of the Right.
   * @return {Right}
   */
  constructor(x) {
    super(x);
  }
  // overrides Functor.map
  /**
   * @access public
   * @param {function} fn is a function.
   * @return {Right}
   */
  map(fn) {
    return new Right(fn(this.value));
  }
  /**
   * @access public
   * @return {Object}
   */
  getOrElse() {
    return this.value;
  }
  /**
   * @access public
   * @return {boolean}
   */
  isLeft() {
    return false;
  }
  /**
   * @access public
   * @return {boolean}
   */
  isRight() {
    return true;
  }
  /**
   * @access public
   * @param {function} leftFn is a function.
   * @param {function} rightFn is a function.
   * @return {Object}
   */
  cata(leftFn, rightFn) {
    return rightFn(this.value);
  }
}

module.exports = Right
