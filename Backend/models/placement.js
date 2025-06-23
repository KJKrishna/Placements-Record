module.exports = (sequelize, DataTypes) => {
  const Placement = sequelize.define("Placement", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  Placement.associate = (models) => {
    Placement.belongsTo(models.Student, {
      foreignKey: "studentId",
      onDelete: "CASCADE"
    });
  };

  return Placement;
};
