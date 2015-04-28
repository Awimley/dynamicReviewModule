var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  cat: String,
  user: String,
  pros: Array,
  cons: Array,
  rating: Number,
  text: Object,
  rtf: Object,
  check: Object,
  select: Object
  
}, {strict: false});

/*
check: {
  field: String,
  options: Array
}

select: {
  field: String,
  options: Array
}
*/

module.exports = mongoose.model('review', reviewSchema);