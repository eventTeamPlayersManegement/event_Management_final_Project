'use strict';

var utils = require('../utils/writer.js');
var Rentauto = require('../service/RentautoService');

module.exports.rentautoGET = function rentautoGET (req, res, next) {
  Rentauto.rentautoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rentautoPOST = function rentautoPOST (req, res, next) {
  Rentauto.rentautoPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
