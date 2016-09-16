const Monad = require('./Monad.js');
const None = require('./None.js');

/**
 * Some
 */
class Some extends Monad {
  /**
   * @param {Object} x is the value of the Some.
   * @return {Some}
   */
  constructor(x) {
    super(x);
  }
  // overrides Functor.map
  /**
   * @access public
   * @param {function} fn is a function.
   * @return {Maybe} ({Some} or {None})
   */
  map(fn) {
    let res = fn(this.value);
    if(res == null || res == undefined) {
      return new None()
    }
    return new Some(res);
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
  isNone() {
    return false;
  }
  /**
   * @access public
   * @return {boolean}
   */
  isSome() {
    return true;
  }
}

module.exports = Some
