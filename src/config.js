"use strict";

exports.defaults = function() {
  return {
    lodash: {
      extensions: ["tmpl", "lodash"]
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
         "  lodash:               # config settings for the Lodash compiler module\n" +
         "    lib: undefined    # use this property to provide a specific version of Lodash\n" +
         "    extensions: [\"tmpl\", \"lodash\"],  # default extensions for Lodash files\n";
};

exports.validate = function( config, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "lodash config", config.lodash ) ) {

    if ( !config.lodash.lib ) {
      config.lodash.lib = require( "lodash" );
    }

    if ( validators.isArrayOfStringsMustExist( errors, "lodash.extensions", config.lodash.extensions ) ) {
      if (config.lodash.extensions.length === 0) {
        errors.push( "lodash.extensions cannot be an empty array");
      }
    }
  }

  return errors;
};
