const Success = require('./Success.js');
const Fail = require('./Fail.js');

/**
 * Validation
 */
class Validation {
  /**
   * @access public
   * @param {Object} x is the value of the Success.
   * @return {Success}
   */
  static Success(x) { return new Success(x); }
  /**
   * @access public
   * @param {Object} x is the value of the Fail.
   * @return {Fail}
   */
  static Fail(x) { return new Fail(x); }
 /**
  * @access public
  * @param {Object} x is the value of the Right.
  * @return {Success}
  */
  static of(x) { return Validation.Success(x); }
}

module.exports = Validation
