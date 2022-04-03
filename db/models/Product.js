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

    Product.associate = function(allModels){
        Product.hasMany(allModels.Color, {
            as: "product_colors",
            foreignKey: "id_color"
       });
        Product.hasMany(allModels.Compatibility, {
            as: "product_compatibilities",
            foreignKey: "id_compatibility"
       });
       Product.belongsTo(allModels.Cart, {
        as: "product_cart",
        foreignKey: "id_product"
   });
  }



    return Product;
};