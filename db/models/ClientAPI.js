const sequelize = require('sequelize');
// const db = require ("../models")

module.exports = (sequelize, DataTypes) => {
    const alias = 'ClientAPI';


    const config = {
        timestamps: false,
        tableName: 'clients'
    }

    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrements: true,
        },
        first_name: DataTypes.STRING,
        email: DataTypes.STRING,
    }

    const ClientAPI = sequelize.define(alias, columns, config);

    /*ClientAPI.associate = function(allModels){
        ClientAPI.belongsTo(allModels.Category, {
            as: "client_category",
            foreignKey: "id_category"
       });

       ClientAPI.belongsToMany(allModels.Product, {
        as: "client_product",
        through: "carts",
        foreignKey: "id_client",
        otherKey: "id_product",
        timestamps: false
        })
    } */
    return ClientAPI
};