'use strict';

var utils = require('../utils/writer.js');
var Suppliers = require('../service/SuppliersService');

module.exports.suppliersGET = function suppliersGET (req, res, next) {
  Suppliers.suppliersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.suppliersPOST = function suppliersPOST (req, res, next) {
  Suppliers.suppliersPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
