'use strict';

var utils = require('../utils/writer.js');
var Stripe = require('../service/StripeService');

module.exports.stripeGET = function stripeGET (req, res, next) {
  Stripe.stripeGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stripePOST = function stripePOST (req, res, next) {
  Stripe.stripePOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
