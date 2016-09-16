const Monad = require('./Monad.js');

/**
 * Fail
 */
class Fail extends Monad {
  /**
   * @param {Object} x is the value of the Fail.
   * @return {Fail}
   */
  constructor(x) {
    super(x);
  }
  // overrides Functor.map
  /**
   * @access public
   * @return {Fail}
   */
  map() {
    return this;
  }
  /**
   * @access public
   * @param {Monad} otherContainer is a Monad (Fail or Success).
   * @return {Fail}
   */
   ap(otherContainer) { //
     return otherContainer instanceof Fail
       ? new Fail(this.value.concat(otherContainer.value))
       : this
   }
  /**
   * @access public
   * @return {boolean}
   */
  isFail() {
    return true;
  }
  /**
   * @access public
   * @return {boolean}
   */
  isSuccess() {
    return false;
  }
  /**
   * @access public
   * @param {function} failureFn is a function.
   * @param {function} successFn is a function.
   * @return {Object}
   */
  cata(failureFn, successFn) {
    return failureFn(this.value);
  }
}
module.exports = Fail
