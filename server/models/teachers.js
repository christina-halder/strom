'use strict';
module.exports = function(sequelize, DataTypes) {
  var teachers = sequelize.define('teachers', {
    acroname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return teachers;
};