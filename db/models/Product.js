const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const alias = 'Product';


    const config = {
        timestamps: false,
        tableName: 'products'
    }

    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrements: true,
        },
        produc_name: DataTypes.STRING,
        product_description: DataTypes.STRING,
        product_image: DataTypes.STRING,
        id_compatibility: DataTypes.INTEGER,
        id_color: DataTypes.INTEGER,
        product_price: DataTypes.DOUBLE
    }

    const Product = sequelize.define(alias, columns, config);
    return Product;
};