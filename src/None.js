const Monad = require('./Monad.js');

/**
 * None
 */
class None extends Monad {
  /**
   * @return {None}
   */
  constructor() {
    super(null)
  }
  // overrides Functor.map
  /**
   * @access public
   * @return {None}
   */
  map() {
    return this;
  }
  // overrides Monad.map
  /**
   * @access public
   * @param {function} fn is a function.
   * @return {Object}
   */
  bind (fn) {
    return this.value;
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
  isNone() {
    return true;
  }
  /**
   * @access public
   * @return {boolean}
   */
  isSome() {
    return false;
  }

}
module.exports = None
