var express = require('express');
var mongoose = require('mongoose');
var db = require('../models/db');
var template = require('../models/template.js');
var review = require('../models/reviews.js');

var sendJsonResponse = function (res, status, content) {
  console.log(content);
  res.status(status);
  res.json(content);
};

module.exports.storeImage = function (img) {
 /* var imageSer = bson().BSON.serialize(img, false, true, false);*/
  console.log("img: ", imageSer);
};

module.exports.getReviews = function (req, res) {
  console.log('fetching reviews...');
  review.find({}, function (err, data) {
    if (err) {sendJsonResponse(res, 404, err);}
    sendJsonResponse(res, 200, data);
  });
};

module.exports.saveReview = function (req, res) {
  review.findById(mongoose.Types.ObjectId(req.body._id), function (err, doc) {
    if (err) {sendJsonResponse(res, 401, err);}
    if (doc) {                                                                  //if it exists, do an update
      template.update({_id: req.body._id}, req.body, function (err, data) {
        if (err) {sendJsonResponse(res, 404, err);}
        sendJsonResponse(res, 204, data);
      });
    } else {                                                                    //else go create a new one.
      var rev = new review(req.body);
      rev.save( function (err, data) {
        if (err) sendJsonResponse(res, 401, err);
        sendJsonResponse(res, 201, data);
      });
    }
  });  
};

module.exports.deleteReview = function (req, res) {
  
};

module.exports.getTemplate = function (req, res) {
  console.log(req.body)
  template.find({"cat": req.body.cat}, function (err, data) {
    if (err) sendJsonResponse(res, 401, err);
    sendJsonResponse(res, 200, data);
  });
};

module.exports.getTemplates = function (req, res) {
  console.log('fetching all templates...');
  template.find({}, function (err, data) {
    if (err) sendJsonResponse(res, 401, err);
    sendJsonResponse(res, 200, data);
  });
};

module.exports.saveTemplate = function (req, res) {
  template.find({cat: req.body.cat}, function (err, doc) {
    if(err) { sendJsonResponse(res, 401, err); }
    if (doc[0]) {
      console.log('doing an update...');
      template.update({cat: req.body.cat}, req.body, function (err, data) {
        if (err) { console.log(err); }
        else {
          sendJsonResponse(res, 204, req.body);
        }
      });
    } else {
      var temp = new template(req.body);
      temp.save( function (err, data) {
        if (err) {sendJsonResponse(res, 401, err);}
        sendJsonResponse(res, 201, req.body);
      });
    }
  });
  
};