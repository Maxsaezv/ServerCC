var mongoose = require("mongoose");

// Schema

var schema = mongoose.Schema(
  {
    nombre:                           { type: String, required: true}, // JUGADOR
    nacimiento:                       { type: Date, default: null},
    pais:                             { type: String, trim: true, default: null}, 
    posicion:                         { type: String, trim: true, default: null}, //DEMARCACIÓN 
    sangre:                           { type: String, trim: true, default: null},
    isapre:                           { type: String, trim: true, default: null},
    status:                           { type: String, trim: true, default: null}, // 4 = Disponible, Reintegro, Lesionado, Ausente
    pie:                              { type: String, trim: true, default: null},
    estatura:                         { type: Number, trim: true, default: null},
    peso:                             { type: Number, trim: true, default: null},
    dorsal:                           { type: Number, trim: true, default: null},
    activo:                           { type: Boolean, default: true},
    
    // FICHA ///
    ficha: {
      clubanterior:                   { type: String},
      historiamedicapersonal: { 
        enfermedadesprevias:          { type: String, trim: true},
        cirugias:                     { type: String, trim: true},
        hospitalizaciones:            { type: String, trim: true},
        alergias:                     { type: Object}, // desicion posterior previa pregunta con stakeholder
        lesionesgravesprevias:        { type: String, trim: true},
        medicamentossuplementos:      { type: String, trim: true},

          dolordisconforttoracico:	  { type: String, trim: true},
          sincopelipotimia:           { type: String, trim: true},
          disneafatiga:               { type: String, trim: true},
          antecedentesoplo:           { type: String, trim: true},
          antecedentehipertension:    { type: String, trim: true},
        
      },
      historiamedicafamiliar: {
        muertesubita:                 { type: String, trim: true},
        enfermedadcardiaca:           { type: String, trim: true},
        enfermedadcardiaca_familiar:  { type: String, trim: true}
      },

      examenfisico: {
        pesoIngreso:                  { type: Number, trim: true },
        estaturaIngreso:              { type: Number, trim: true },
        ritmocardiaco:                { type: String, trim: true },
        frecuenciacardiaca:           { type: String, trim: true },
        soplos:                       { type: String, trim: true },
        pulsosperifericos:            { type: String, trim: true },
        estigmas:                     { type: String, trim: true },
        presionarterial:              { type: String, trim: true },
        faringe_amigdalas:            { type: String, trim: true },
        pulmonar:                     { type: String, trim: true },
        abdomen:                      { type: String, trim: true },
        hernias:                      { type: String, trim: true },
        musculoesqueletico:           { type: String, trim: true }
      },
      
      electrocardiogramareposo: {
        type: String,
        trim: true
      },
      
      otrosexamenes: {
        type: String,
        trim: true
      },

      conclusion: {
        type: String,
        trim: true
      },

      medico: {
        nombre: { type: String, trim: true },
        rut: { type: String, trim: true }
      },

      fecha: { type: Date, default: Date.now}
    }
    

  },

  {
    timestamps: true
  }
);

var Player = module.exports = mongoose.model("player", schema);

module.exports.get = function(callback, limit) {
  Player.find(callback).limit(limit);
};

