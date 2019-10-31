var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BirdsSchema = new Schema(
    {
      name: {type: String, required: true},
      kingdom: {type: String, required: true},
      phylum: {type: String, required: true},
      class: {type: String, required: true},
      order: {type: String, required: true},
      family: {type: String, required: true},
      genus: {type: String, required: true},
      conservation: {type: String, required: true, enum: ['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC']},
      image: {type: String, required: true}
    }
  );

  module.exports = mongoose.model('Birds', BirdsSchema);
