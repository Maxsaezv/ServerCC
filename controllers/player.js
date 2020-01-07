// Import model
Player = require("../models/player");

exports.activo = async(req, res) => {
  const jugador = await Player.aggregate([{ $match: { activo: true}}])
                        .catch(err => res.json(err));
  res.send(jugador)
  };

exports.inactivo = async(req, res) => {
  const jugador = await Player.aggregate([{ $match: { activo: false}}])
                        .catch(err => res.json(err));
  res.send(jugador)
};

exports.create = (req, res) => {
  var player = new Player();
 
  let formData = req.body.player;

  player.nombre = formData.nombre;
  player.nacimiento = formData.nacimiento;
  player.posicion = formData.posicion;
  player.pais = formData.pais;
  player.sangre = formData.sangre ? formData.sangre : null;
  player.isapre = formData.isapre ? formData.isapre : null;
  player.pie = formData.pie ? formData.pie : null;
  player.dorsal = formData.dorsal ? formData.dorsal : null;
  player.peso = formData.peso ? formData.peso : null;
  player.estatura = formData.estatura ? formData.estatura : null;
  player.status = formData.status ? formData.status : "Disponible";
  //FICHA
  player.ficha.clubanterior = formData.ficha.clubanterior ? formData.ficha.clubanterior : null;
  player.ficha.historiamedicapersonal.enfermedadesprevias = formData.ficha.historiamedicapersonal.enfermedadesprevias ? formData.ficha.historiamedicapersonal.enfermedadesprevias : null;
  player.ficha.historiamedicapersonal.cirugias = formData.ficha.historiamedicapersonal.cirugias ? formData.ficha.historiamedicapersonal.cirugias : null;
  player.ficha.historiamedicapersonal.hospitalizaciones = formData.ficha.historiamedicapersonal.hospitalizaciones ? formData.ficha.historiamedicapersonal.hospitalizaciones : null;
  player.ficha.historiamedicapersonal.alergias = formData.ficha.historiamedicapersonal.alergias ? formData.ficha.historiamedicapersonal.alergias : null;
  player.ficha.historiamedicapersonal.lesionesgravesprevias = formData.ficha.historiamedicapersonal.lesionesgravesprevias ? formData.ficha.historiamedicapersonal.lesionesgravesprevias : null;
  player.ficha.historiamedicapersonal.medicamentossuplementos = formData.ficha.historiamedicapersonal.medicamentossuplementos ? formData.ficha.historiamedicapersonal.medicamentossuplementos : null;
  player.ficha.historiamedicapersonal.dolordisconforttoracico = formData.ficha.historiamedicapersonal.dolordisconforttoracico ? formData.ficha.historiamedicapersonal.dolordisconforttoracico : null;
  player.ficha.historiamedicapersonal.sincopelipotimia = formData.ficha.historiamedicapersonal.sincopelipotimia ? formData.ficha.historiamedicapersonal.sincopelipotimia : null;
  player.ficha.historiamedicapersonal.disneafatiga = formData.ficha.historiamedicapersonal.disneafatiga ? formData.ficha.historiamedicapersonal.disneafatiga : null;
  player.ficha.historiamedicapersonal.antecedentesoplo = formData.ficha.historiamedicapersonal.antecedentesoplo ? formData.ficha.historiamedicapersonal.antecedentesoplo : null;
  player.ficha.historiamedicapersonal.antecedentehipertension = formData.ficha.historiamedicapersonal.antecedentehipertension ? formData.ficha.historiamedicapersonal.antecedentehipertension : null;
  /// HISTORIA MEDICA FAMILIAR
  player.ficha.historiamedicafamiliar.muertesubita = formData.ficha.historiamedicafamiliar.muertesubita ? formData.ficha.historiamedicafamiliar.muertesubita : null;
  player.ficha.historiamedicafamiliar.enfermedadcardiaca = formData.ficha.historiamedicafamiliar.enfermedadcardiaca ? formData.ficha.historiamedicafamiliar.enfermedadcardiaca : null;
  player.ficha.historiamedicafamiliar.enfermedadcardiaca_familiar = formData.ficha.historiamedicafamiliar.enfermedadcardiaca_familiar ? formData.ficha.historiamedicafamiliar.enfermedadcardiaca_familiar : null;
  ///EXAMEN FISICO//
  player.ficha.examenfisico.fechaIngreso = formData.ficha.examenfisico.fechaIngreso ? formData.ficha.examenfisico.fechaIngreso : null;
  player.ficha.examenfisico.estaturaIngreso = formData.ficha.examenfisico.estaturaIngreso ? formData.ficha.examenfisico.estaturaIngreso : null;
  player.ficha.examenfisico.ritmocardiaco = formData.ficha.examenfisico.ritmocardiaco ? formData.ficha.examenfisico.ritmocardiaco : null;
  player.ficha.examenfisico.frecuenciacardiaca = formData.ficha.examenfisico.frecuenciacardiaca ? formData.ficha.examenfisico.frecuenciacardiaca : null;
  player.ficha.examenfisico.soplos = formData.ficha.examenfisico.soplos ? formData.ficha.examenfisico.soplos : null;
  player.ficha.examenfisico.pulsosperifericos = formData.ficha.examenfisico.pulsosperifericos ? formData.ficha.examenfisico.pulsosperifericos : null;
  player.ficha.examenfisico.estigmas = formData.ficha.examenfisico.estigmas ? formData.ficha.examenfisico.estigmas : null;
  player.ficha.examenfisico.presionarterial = formData.ficha.examenfisico.presionarterial ? formData.ficha.examenfisico.presionarterial : null;
  player.ficha.examenfisico.faringe_amigdalas = formData.ficha.examenfisico.faringe_amigdalas ? formData.ficha.examenfisico.faringe_amigdalas : null;
  player.ficha.examenfisico.pulmonar = formData.ficha.examenfisico.pulmonar ? formData.ficha.examenfisico.pulmonar : null;
  player.ficha.examenfisico.abdomen = formData.ficha.examenfisico.abdomen ? formData.ficha.examenfisico.abdomen : null;
  player.ficha.examenfisico.hernias = formData.ficha.examenfisico.hernias ? formData.ficha.examenfisico.hernias : null;
  player.ficha.examenfisico.musculoesqueletico = formData.ficha.examenfisico.musculoesqueletico ? formData.ficha.examenfisico.musculoesqueletico : null;
  /// OTROS
  player.ficha.electrocardiogramareposo = formData.ficha.electrocardiogramareposo ? formData.ficha.electrocardiogramareposo : null;
  player.ficha.otrosexamenes = formData.ficha.otrosexamenes ? formData.ficha.otrosexamenes : null;
  player.ficha.conclusion = formData.ficha.conclusion ? formData.ficha.conclusion : null;
  player.ficha.medico.nombre = formData.ficha.medico.nombre ? formData.ficha.medico.nombre : null;
  player.ficha.medico.rut = formData.ficha.medico.rut ? formData.ficha.medico.rut : null;

  // Save player
  player.save(function(err) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    } else {
      res.json({
        message: "Player created",
        data: player
      });
    }
  });
};

exports.view = (req, res) => {
  Player.findById(req.params.player_id, function(err, player) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    } else {
      res.json({
        message: "Player details",
        player: player
      });
    }
  });
};

exports.update = (req, res) => {
  Player.findById(req.params.player_id, function(err, player) {
    if (err) {
      res.json({
        status: "error", 
        message: err
      });
    }

    let formData = req.body.player;

    player.nombre = formData.nombre ? formData.nombre : player.nombre;
    player.posicion = formData.posicion ? formData.posicion : player.posicion;
    player.isapre = formData.isapre ? formData.isapre : player.isapre;
    player.status = formData.status ? formData.status : player.status;
    player.dorsal = formData.dorsal ? formData.dorsal : player.dorsal;
    player.peso = formData.peso ? formData.peso : player.peso;

    player.save(function(err) {
      if (err) {
        res.json({
          status: "error",
          message: err
        });
      } else {
        res.json({
          message: "Jugador actualizado",
          player: player
        });
      }
    });
  });
};

exports.desvinculacion = async(req, res) => {
  const id = req.params.player_id;
  const jugador = await Player.findByIdAndUpdate(id, {$set: {activo: false}})
                                            .catch(err => res.json(err));
  res.send(jugador)
};

exports.recontratacion = async(req, res) => {
  const id = req.params.player_id;
  const jugador = await Player.findByIdAndUpdate(id, {$set: {activa: true}})
                                            .catch(err => res.json(err));
  res.send(jugador)
};

exports.eliminar = async(req, res) => {
  Player.deleteOne(
    {
      _id: req.params.player_id
    },
    function(err, player) {
      if (err) {
        res.send(err);
      } else {
        res.json({
          status: "success",
          message: "Jugador eliminado"
        });
      }
    }
  )
};
