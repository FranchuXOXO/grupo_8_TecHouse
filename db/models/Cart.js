const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const alias = 'Cart';


    const config = {
        timestamps: false,
        tableName: 'carts'
    }

    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrements: true,
        },
        id_client: DataTypes.INTEGER,
        id_product: DataTypes.INTEGER,
        product_quantity: DataTypes.INTEGER,
        total_price: DataTypes.DOUBLE,
    }

    const Cart = sequelize.define(alias, columns, config);

    Cart.associate = function (allModels) {
        Cart.belongsTo(allModels.Client, {
            as: "cart_client",
            foreignKey: "id_client"
        });

     /*   Cart.hasMany(allModels.Product, {
            as: "cart_products",
            foreignKey: "id_product"
        });*/
    }

    return Cart
};