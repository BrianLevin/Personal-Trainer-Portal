// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isTrainer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    // we're ignoring this for future trainers and clients
    trainer_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // defaultValue: 1
    },
    
  });

  User.associate = function (models) {
    // Associating User with Client
    // When an User is deleted, also delete any associated Clients (would need a way to reassign clients instead of deletion...)
    User.hasMany(models.Client, {
      onDelete: "cascade"
    });
  };

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });



  return User;

};

// model schematic for AJAX object

// model = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   isTrainer: booleam,
//   trainer_Id: #,
// }