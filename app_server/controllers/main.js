var express = require('express');
var db = require('../models/db');
var template = require('../models/template.js');

var sendJsonResponse = function (res, status, content) {
  console.log(content);
  res.status(status);
  res.json(content);
};

module.exports.storeImage = function (img) {
  var imageSer = bson().BSON.serialize(img, false, true, false);
  console.log("img: ", imageSer);
};
module.exports.saveReview = function (req, res) {
  console.log('server side goodness using mongoose. STRICT: FALSE');
};
module.exports.deleteReview = function (req, res) {
  console.log('deleting a review. JK API NOT CONNECTED');
};
module.exports.getTemplate = function (req, res) {
  template.find({"cat": req.body.cat}, function (err, data) {
    if (err) sendJsonResponse(res, 401, err);
    sendJsonResponse(res, 200, data)
  })
};
module.exports.getTemplates = function (req, res) {
  console.log('fetching a template...');
  template.find({}, function (err, data) {
    if (err) sendJsonResponse(res, 401, err);
    sendJsonResponse(res, 200, data);
  })
};
module.exports.saveTemplate = function (req, res) {
  console.log('saving a template...');
  var temp = new template(req.body);
  temp.save( function (err, data) {
    if (err) {sendJsonResponse(res, 400, err);}
    sendJsonResponse(res, 201, req.body);
  });
};