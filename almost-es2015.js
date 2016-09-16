// ESDoc plugin
// see https://github.com/esdoc/esdoc/issues/168
exports.onHandleCode = function (ev) {
  ev.data.code = ev.data.code
    .replace(/module\.exports = /g, 'export default ')
    .replace(/exports = /g, 'export default ');
};
