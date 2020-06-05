module.exports = function (sequelize, DataTypes) {// var Plans = sequelize.define("Plans", {
    var Plans = sequelize.define("Plans", {
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