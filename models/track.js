const { Sequelize } = require("sequelize");
const db = require("../config/db");

const Track = db.define("Track", {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      len: {
        args: [1, 50],
        message: "Name must be between 1 and 50 characters!",
      },
    },
  },
  content: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(255),
    validate: {
      len: {
        args: [0, 255],
        message: "Description can be up to 255 characters.",
      },
    },
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = track;
