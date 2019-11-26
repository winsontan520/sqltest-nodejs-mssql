/* jshint indent: 2 */


module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Inventory', {
    'id': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'name': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'quantity': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'Inventory',
    timestamps: false, // don't add the timestamp attributes (updatedAt, createdAt)
  });
};
