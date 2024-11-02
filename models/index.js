const sequelize = require("../config/db");
const Category = require("./category");
const Comment = require("./comment");
const Material = require("./track");
const Rating = require("./rating");
const Type = require("./type");
const User = require("./user");

const TrackType = sequelize.define(
  "TrackType",
  {},
  { timestamps: false }
);

Material.belongsToMany(Type, { through: TrackType, as: "type" });
Type.belongsToMany(Material, { through: TrackType, as: "Track" });

Material.hasMany(Rating, { as: "rating", foreignKey: "TrackId" });
Rating.belongsTo(Material, { as: "track", foreignKey: "TrackId" });

Material.hasMany(Category, { as: "category", foreignKey: "TrackId" });
Category.belongsTo(Material, { as: "track", foreignKey: "TrackId" });

module.exports = {
  Category,
  Comment,
  Track,
  Rating,
  Type,
  User,
};
