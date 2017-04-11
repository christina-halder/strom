'use strict';
module.exports = function(sequelize, DataTypes) {
  var courses = sequelize.define('courses', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return courses;
};