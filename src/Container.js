/**
 * Container
 */
class Container {
  /**
   * @param {Object} x is the value of the Container.
   * @return {Container}
   */
  constructor(x) {
    /**
     * @access private
     * @type {Object}
     */
    const value = x;
    Object.defineProperty(this, "value", { get: () => value })
  }
  /**
   * @access public
   * @param {Object} x is the value of the Container.
   * @return {Container}
   */
  static of(x) {
    return new Container(x);
  }
}
module.exports = Container
