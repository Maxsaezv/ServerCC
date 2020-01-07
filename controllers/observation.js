// Import model
Observation = require("../models/observation");

exports.all = async(req, res) => {
  const observation = await Observation.aggregate([{ $match: { injuryId: req.params.injury_id}}])
                        .catch(err => res.json(err));
  res.send(observation)
  };

exports.create = (req, res) => {
  var observation = new Observation();
  let formData = req.body.observation;

  observation.nombre = formData.nombre;
  observation.fecha = formData.fecha;
  observation.body = formData.body ? formData.body : null;
  observation.injuryId = req.params.injury_id;

  observation
    .save()
    .then(observation => {
      res.status(201).json({
        message: "Observation created",
        observation
      });
    })
    .catch(err => {
      if (err.name === "ValidationError") {
        res.status(422).json({
          status: "error",
          type: "ValidationError",
          error: err.errors
        });
      } else {
        res.status(400).json({
          status: "error",
          error: err
        });
      }
    });
};

exports.view = (req, res) => {
  Observation.findById(req.params.observation_id, function(err, observation) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    } else {
      res.json({
        message: "Observation details",
        observation: observation
      });
    }
  });
};

exports.update = (req, res) => {
  Observation.findById(req.params.observation_id, function(err, observation) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }

    let formData = req.body.observation;
    observation.nombre = formData.nombre ? formData.nombre : observation.nombre;
    observation.body = formData.body ? formData.body : observation.body;
    observation.fecha = formData.fecha ? formData.fecha : observation.fecha;



    observation.save(function(err) {
      if (err) {
        res.json({
          status: "error",
          message: err
        });
      } else {
        res.json({
          message: "Observación actualizada",
          observation: observation
        });
      }
    });
  });
};

exports.delete = (req, res) => {
  Observation.deleteOne(
    {
      _id: req.params.observation_id
    },
    function(err, observation) {
      if (err) {
        res.send(err);
      } else {
        res.json({
          status: "success",
          message: "Observación eliminada"
        });
      }
    }
  );
};
