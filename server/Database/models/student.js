'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            arg: [2, 15],
            message: 'username has to between 2 and 15 characters'
          },
          is: /^[A-Za-z]+$/i
        }
      }
    },
    {}
  );
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
