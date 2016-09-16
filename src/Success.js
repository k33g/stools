const Monad = require('./Monad.js');
const Fail = require('./Fail.js');

/**
 * Success
 */
class Success extends Monad {
  /**
   * @param {Object} x is the value of the Success.
   * @return {Success}
   */
  constructor(x) {
    super(x);
  }
  //map(fn) { return new Success(fn(this.value)); }
  /**
   * @access public
   * @param {Monad} otherContainer is a Monad (Fail or Success).
   * @return {Success or Fail}
   */
   ap(otherContainer) {
     return otherContainer instanceof Fail
       ? otherContainer
       : otherContainer.map(this.value)
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
  isFail() {
    return false;
  }
  /**
   * @access public
   * @return {boolean}
   */
  isSuccess() {
    return true;
  }
  /**
   * @access public
   * @param {function} failureFn is a function.
   * @param {function} successFn is a function.
   * @return {Object}
   */
  cata(failureFn, successFn) {
    return successFn(this.value);
  }
}

module.exports = Success
