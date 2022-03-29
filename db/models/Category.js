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

    Category.associate = function(allModels){
        Category.hasMany(allModels.Client, {
            as: "category_client",
            foreignKey: "id_category"
       });
       }

    return Category
};


