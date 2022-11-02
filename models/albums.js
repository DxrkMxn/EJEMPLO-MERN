const mongoose = require('mongoose');

const albumsSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  artista: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  genero: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  year: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
});

module.exports = mongoose.model('albums', albumsSchema);



