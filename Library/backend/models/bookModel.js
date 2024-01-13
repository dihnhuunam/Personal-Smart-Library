module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("books", {
    'BookID': {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    "Category": {
    type: DataTypes.STRING,
    allowNull: false
    },
    "ImageURL": {
    type: DataTypes.STRING,
    allowNull: false
    },
    'Title': {
    type: DataTypes.STRING,
    allowNull: false
    },
    'Author': {
    type: DataTypes.STRING,
    allowNull: false
    },
    "Publication Date": {
    type: DataTypes.DATEONLY,
    },
    "Page count": {
      type: DataTypes.INTEGER,
    }
}, {
  timestamps: false // Disable timestamps (createdAt and updatedAt)
})
  return Book
}





