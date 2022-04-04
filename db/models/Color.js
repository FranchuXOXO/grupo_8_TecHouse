const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const alias = 'Color';


    const config = {
        timestamps: false,
        tableName: 'colors'
    }

    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrements: true,
        },
        color: DataTypes.STRING,
    }

    const Color = sequelize.define(alias, columns, config);

    Color.associate = function(allModels){
        Color.hasMany(allModels.Product, {
            as: "color_product",
            foreignKey: "id_color"
       });
       }


    return Color
};