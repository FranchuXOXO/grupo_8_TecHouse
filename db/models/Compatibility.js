const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const alias = 'Compatibility';


    const config = {
        timestamps: false,
        tableName: 'compatibility'
    }

    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrements: true,
        },
        device_name: DataTypes.STRING
    }

    const Compatibility = sequelize.define(alias, columns, config);

    Compatibility.associate = function(allModels){
       Compatibility.belongsTo(allModels.Product, {
            as: "compatibility_product",
            foreignKey: "id_compatibility"
       });
       }


    return Compatibility
};