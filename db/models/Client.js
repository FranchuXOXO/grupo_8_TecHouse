const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const alias = 'Client';


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
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        profile_image: DataTypes.STRING,
        id_category: DataTypes.INTEGER
    }

    const Client = sequelize.define(alias, columns, config);
    return Client
};