module.exports = function(value) {
    if (value === null) return null; 

    if (typeof value === 'object') {
        return String(value.constructor.name).toLowerCase();
    }
  return typeof (value);
}