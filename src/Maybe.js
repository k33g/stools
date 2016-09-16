const Some = require('./Some.js');
const None = require('./None.js');

/**
 * Maybe
 */
class Maybe {
  /**
   * @access public
   * @param {Object} x is the value of the Some.
   * @return {Some}
   */
  static Some(x) { return new Some(x); }
  /**
   * @access public
   * @return {None}
   */
  static None() { return new None(); }
  /**
   * @access public
   * @param {Object} x is the value of the Maybe.
   * @return {Maybe} ({Some} or {None})
   */
  static fromNullable(x) {
    return (x !== null && x !== undefined)
      ? Maybe.Some(x)
      : Maybe.None();
  }
 /**
  * @access public
  * @param {Object} x is the value of the Some.
  * @return {Some}
  */
  static of(x) { return Maybe.Some(x); }
}

module.exports = Maybe
