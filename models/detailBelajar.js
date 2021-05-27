
module.exports = (sequelize, DataTypes) => {
    const detailBelajar = sequelize.define("detailBelajar", {
        user_id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        semester: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return detailBelajar;
}