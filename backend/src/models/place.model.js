const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  city: {
    type: String,
    trim: true,
    maxlength: 100, 
  },
  place: {
    type: String,
    trim: true,
    maxlength: 100, 
  },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
