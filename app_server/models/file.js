var mongoose = require('mongoose');
var filePluginLib = require('mongoose-file');
var filePlugin = filePluginLib.filePlugin;
var make_upload_to_model = filePluginLib.make_upload_to_model;

var fileSchema = new Schema({
  "name" : String, 
  "file" : String
});