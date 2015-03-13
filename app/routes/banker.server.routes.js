'use strict';
var banker = require('../controllers/banker.server.controller');
var users = require('../../app/controllers/users.server.controller');

module.exports = function(app){
  app.route('/identity').get(banker.getIdentity);
  app.route('/accounts').get(banker.getAllAccounts);
  app.route('/accounts/:account_id').get(banker.getUniqueAccount);
// <<<<<<< HEAD
// <<<<<<< HEAD
  // The below route will be removed and moved to delete my account setting in the future as accounts can only be archived a user suspends his/her accounts.
  app.route('/account').get(banker.ArchiveAccount);

// =======
  app.route('/contants').get(banker.getConstants);
// >>>>>>> refactoring the editing campaign test to work with the slug url
// =======
  app.route('/credentials').get(banker.getConstants);
// >>>>>>> moved the credentials to the backed
};