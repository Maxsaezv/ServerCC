var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Schema
var schema = Schema(
  {
    injuryId: {type: String, required: false},
    nombre:         { type: String, trim: true, required: [true, 'Título es requerido']},
    fecha:        { type: Date, default: Date.now()},
    body:         { type: String, trim: true },
    // image:        { type: Object} // IMAGEN
  },
  {
    timestamps: true
  }
);

var Observation = module.exports = mongoose.model('observation', schema);
