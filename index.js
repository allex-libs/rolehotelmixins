function createLib (execlib) {
  var lib = execlib.lib;
  return {
    mixins: {
      service: require('./servicecreator')(lib)
    }
  };
}

module.exports = createLib;
