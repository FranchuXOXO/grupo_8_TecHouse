const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const alias = 'Category';


    const config = {
        timestamps: false,
        tableName: 'categories'
    }

    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrements: true,
        },
        category: DataTypes.STRING
    }

    const Category = sequelize.define(alias, columns, config);
    return Category
};