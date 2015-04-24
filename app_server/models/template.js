var mongoose = require('mongoose');

var templateSchema = new mongoose.Schema({
  cat: String,
  text: Array,
  rtf: Array,
  check: Object,
  select: Object
});

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