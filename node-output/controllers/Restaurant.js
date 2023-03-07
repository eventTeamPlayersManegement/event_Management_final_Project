'use strict';

var utils = require('../utils/writer.js');
var Restaurant = require('../service/RestaurantService');

module.exports.restaurantGET = function restaurantGET (req, res, next) {
  Restaurant.restaurantGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.restaurantPOST = function restaurantPOST (req, res, next) {
  Restaurant.restaurantPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
