module.exports = function (sequelize, DataTypes) {
    var ClientLog = sequelize.define("Client Log", {
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        session_note: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    // need to define relation to user model
    ClientLog.associate = function (models) {
        // We're saying that a Client should belong to a User
        // A Client can't be created without a User due to the foreign key constraint
        ClientLog.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return ClientLog;
};