'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.messageGET = function messageGET (req, res, next) {
  Message.messageGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagePOST = function messagePOST (req, res, next) {
  Message.messagePOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
