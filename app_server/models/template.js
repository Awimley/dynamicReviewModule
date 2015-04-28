var mongoose = require('mongoose');

var templateSchema = new mongoose.Schema({
  cat: {type: String, unique: true},
  text: Array,
  rtf: Array,
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

module.exports = mongoose.model('template', templateSchema);