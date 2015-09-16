module.exports = function(config) {
  var newStyle = {};
  Object.keys(config.style).forEach(function(key) {
    var newKey = key;
    if (/^on[A-Z]/.test(key)) {
      newKey = key.replace(/^on([A-Z])/, function(match, p1) {
        return ':' + p1.toLowerCase();
      });
    }

    newStyle[newKey] = config.style[key];
  });
  return {style: newStyle};
};
