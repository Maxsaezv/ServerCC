// Import model
Injury = require("../models/injury");

exports.activas = async(req, res) => {
    const injury = await Injury.aggregate([{ $match: { activa: true, playerId: req.params.player_id}}])
    .catch(err => res.json(err));
    res.send(injury)
};

exports.inactivas = async(req, res) => {
  const injury = await Injury.aggregate(
    [
      {
        $match: {
        activa: false,
        playerId: req.params.player_id
        }
      }
    ]
  )
  .catch(err => res.json(err));
  res.send(injury)
};

exports.create = (req, res) => {
  var injury = new Injury();
  let formData = req.body.injury;
  
  injury.nombre = formData.nombre;
  injury.fecha = formData.fecha ? formData.fecha : null;
  injury.reintegroestimado = formData.reintegroestimado ? formData.reintegroestimado : null;
  injury.lateralidad = formData.lateralidad ? formData.lateralidad : null;
  injury.partidosPerdidos = formData.partidosPerdidos ? formData.partidosPerdidos : null;
  injury.gravedad = formData.gravedad ? formData.gravedad : null;
  injury.tipo = formData.tipo ? formData.tipo : null;
  injury.mecanismo = formData.mecanismo ? formData.mecanismo : null;
  injury.entorno = formData.entorno ? formData.entorno : null;
  injury.dinamica = formData.dinamica ? formData.dinamica : null;
  injury.actividad = formData.actividad ? formData.actividad : null;
  injury.superficie = formData.superficie ? formData.superficie : null;
  injury.origen = formData.origen ? formData.origen : null;
  injury.traumatico = formData.traumatico ? formData.traumatico : null;
  injury.clasificacion = formData.clasificacion ? formData.clasificacion : null;
  injury.zona = formData.zona ? formData.zona : null;
  injury.playerId = req.params.player_id;
  
  injury
    .save()
    .then(injury => {
      res.status(201).json({
        message: "Injury created",
        injury
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
  Injury.findById(req.params.injury_id, function(err, injury) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    } else {
      res.json({
        message: "Injury details",
        injury: injury
      });
    }
  });
};

exports.update = (req, res) => {
  Injury.findById(req.params.injury_id, function(err, injury) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }

    let formData = req.body.injury;

    injury.nombre = formData.nombre? formData.nombre : injury.nombre;
    injury.fecha = formData.fecha ? formData.fecha : injury.fecha;
    injury.reintegroestimado = formData.reintegroestimado ? formData.reintegroestimado : injury.reintegroestimado;
    injury.lateralidad = formData.lateralidad ? formData.lateralidad : injury.lateralidad;
    injury.partidosPerdidos = formData.partidosPerdidos ? formData.partidosPerdidos : injury.partidosPerdidos;
    injury.gravedad = formData.gravedad ? formData.gravedad : injury.gravedad;
    injury.tipo = formData.tipo ? formData.tipo : injury.tipo;
    injury.mecanismo = formData.mecanismo ? formData.mecanismo : injury.mecanismo;
    injury.entorno = formData.entorno ? formData.entorno : injury.entorno;
    injury.dinamica = formData.dinamica ? formData.dinamica : injury.dinamica;
    injury.actividad = formData.actividad ? formData.actividad : injury.actividad;
    injury.superficie = formData.superficie ? formData.superficie : injury.superficie;
    injury.origen = formData.origen ? formData.origen : injury.origen;
    injury.traumatico = formData.traumatico ? formData.traumatico : injury.traumatico;
    injury.clasificacion = formData.clasificacion ? formData.clasificacion : injury.clasificacion;
    injury.zona = formData.zona ? formData.zona : injury.zona;

    injury.save(function(err) {
      if (err) {
        res.json({
          status: "error",
          message: err
        });
      } else {
        res.json({
          message: "Lesión actualizada",
          injury: injury
        });
      }
    });
  });
};

exports.dardealta = async(req, res) => {
  const id = req.params.injury_id;
  const lesion = await Injury.findByIdAndUpdate(id, {$set: {activa: false}})
                                            .catch(err => res.json(err));
  res.send(lesion)
};

exports.eliminar = async(req, res) => {
  Injury.deleteOne(
    {
      _id: req.params.injury_id
    },
    function(err, injury) {
      if (err) {
        res.send(err);
      } else {
        res.json({
          status: "success",
          message: "Lesion eliminada"
        });
      }
    }
  )
};
