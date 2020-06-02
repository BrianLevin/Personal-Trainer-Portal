module.exports = function (sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_height: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        goals: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        injuries: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        medical_conditions: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        diet: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        history: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        session_notes: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        plan_type: {
            type: DataTypes.INTEGER,
            // need to change to false eventually to attach plan_id?
            allowNull: true,
        },
    });

    // need to define relation to user model
    Client.associate = function (models) {
        // We're saying that a Client should belong to a User
        // A Client can't be created without a User due to the foreign key constraint
        Client.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Client;
};