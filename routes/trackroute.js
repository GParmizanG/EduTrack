const TrackController = require("../controllers/trackcontroller")
const { verifyToken } = require("../middleware/authjwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.put('/tracks/:materialId', verifyToken, materialController.modifyMaterial);
  app.post("/track", verifyToken, materialController.addMaterial)
};