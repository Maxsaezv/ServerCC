let router = require("express").Router();

router.get("/", function(req, res) {
  res.json({
    status: "API",
    message: "Welcome to Colo-Colo medical app API"
  });
});

// // // Auth's routes

// ./ROUTES/API

// Player's routes
var playersController = require("./controllers/player");

router
  .route("/players")
  .get(playersController.activo)
  .post(playersController.create)
router
  .route("/players/inactivos")
  .get(playersController.inactivo)
router
  .route("/players/:player_id")
  .get(playersController.view)
  .delete(playersController.desvinculacion)
  .patch(playersController.update);
router
  .route("/players/recontratacion/:player_id")
  .patch(playersController.recontratacion)
  .delete(playersController.eliminar)

// Injury's routes
var injuriesController = require("./controllers/injury");

router
  .route("/players/:player_id/injuries")
  .get(injuriesController.activas)
  .post(injuriesController.create)
router
  .route("/players/:player_id/historial")
  .get(injuriesController.inactivas)
router
  .route("/players/:player_id/historial/:injury_id")
  .delete(injuriesController.eliminar)
router
  .route("/players/:player_id/injuries/:injury_id")
  .get(injuriesController.view)
  .delete(injuriesController.dardealta)
  .patch(injuriesController.update);

// Observation's routes

var observationsController = require('./controllers/observation');

router
  .route("/players/:players_id/injuries/:injury_id/observations")
  .get(observationsController.all)
  .post(observationsController.create)
router
  .route("/players/:player_id/injuries/:injury_id/observations/:observation_id")
  .get(observationsController.view)
  .delete(observationsController.delete)
  .patch(observationsController.update);

module.exports = router;
