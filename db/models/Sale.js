const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const alias = 'Sale';
    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrements: true,
        },
        id_client: {
            type: DataTypes.INTEGER
        },
        id_product: {
            type: DataTypes.INTEGER
        },
        product_quantity: {
            type: DataTypes.INTEGER
        },
        total_price: {
            type: DataTypes.DOUBLE
        },
        id_cart: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        timestamps: false,
        tableName: 'sales'
    }
    const Sale = sequelize.define(alias, columns, config);

    Sale.associate = function (allModels) {
        Sale.belongsTo(allModels.Client, {
            as: "sale_client",
            foreignKey: "id_client",
        });
        Sale.hasMany(allModels.Product, {
            as: "sale_products",
            foreignKey: "id_product",
        });
    }
    
    return Sale;
}