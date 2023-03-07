'use strict';

var utils = require('../utils/writer.js');
var Photographer = require('../service/PhotographerService');

module.exports.photographerGET = function photographerGET (req, res, next) {
  Photographer.photographerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.photographerPOST = function photographerPOST (req, res, next) {
  Photographer.photographerPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
