const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    //defino el modelo  
  sequelize.define("genre", {
    id: {
      /* type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, */
      type: DataTypes.INTEGER,
      auntoIncrement:true,
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },{ timestamps: false });
};
