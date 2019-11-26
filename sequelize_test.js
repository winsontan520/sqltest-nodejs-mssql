
const Sequelize = require('sequelize');

var sequelize = new Sequelize('TestDB', 'SA', 'P@ssword1', {
    host: 'localhost',
    dialect: 'mssql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

var Inventory = sequelize.define('Inventory', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false, // don't add the timestamp attributes (updatedAt, createdAt)
    freezeTableName: true // Model tableName will be the same as the model name
});

Inventory.findOne().then(function (inventory) {
    console.log("id " + inventory.id + " " + inventory.name + " " + inventory.quantity);
});