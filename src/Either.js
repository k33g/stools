const Right = require('./Right.js');
const Left = require('./Left.js');

/**
 * Either
 */
class Either {
  /**
   * @access public
   * @param {Object} x is the value of the Left.
   * @return {Left}
   */
  static Left(x) { return new Left(x); }
  /**
   * @access public
   * @param {Object} x is the value of the Right.
   * @return {Right}
   */
  static Right(x) { return new Right(x); }
  /**
   * @access public
   * @param {Object} x is the value of the Either.
   * @return {Either} ({Left} or {Right})
   */
  static fromNullable(x) {
    return (x !== null && x !== undefined)
      ? Either.Right(x)
      : Either.Left(x);
  }
 /**
  * @access public
  * @param {Object} x is the value of the Right.
  * @return {Right}
  */
  static of(x) { return Either.Right(x); }
}

module.exports = Either
