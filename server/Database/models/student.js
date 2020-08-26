'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      username: DataTypes.STRING,
      allowNull: false,
      unique: true,
      is: /^[A-Za-z]+$/i,
      len: [2, 15]
    },
    {}
  );
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
