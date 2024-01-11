module.exports = (sequelize, DataTypes) => {
  const Personal = sequelize.define("personal libraries", {
    'PersonalID': {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    "Name of library": {
    type: DataTypes.STRING,
    allowNull: false
    }
}, {
timestamps: false // Disable timestamps (createdAt and updatedAt)
})
  return Personal
}