module.exports = function (sequelize, DataTypes) {// var Plans = sequelize.define("Plans", {
    var Plans = sequelize.define("Plans", {
        Age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Plan_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Workouts: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Plans;
}