'use strict';

var utils = require('../utils/writer.js');
var Conversation = require('../service/ConversationService');

module.exports.conversationGET = function conversationGET (req, res, next) {
  Conversation.conversationGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.conversationPOST = function conversationPOST (req, res, next, body) {
  Conversation.conversationPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
