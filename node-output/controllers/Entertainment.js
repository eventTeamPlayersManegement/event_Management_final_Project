'use strict';

var utils = require('../utils/writer.js');
var Entertainment = require('../service/EntertainmentService');

module.exports.entertainmentGET = function entertainmentGET (req, res, next) {
  Entertainment.entertainmentGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.entertainmentPOST = function entertainmentPOST (req, res, next) {
  Entertainment.entertainmentPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
