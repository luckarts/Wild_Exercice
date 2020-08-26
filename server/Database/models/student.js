'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      username: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [2, 10],
        is: /^[A-Za-z]+$/i
      }
    },
    {}
  );
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
