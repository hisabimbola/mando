'use strict';

var express = require('express'),
    router = express.Router(),
    campaigns = require('../../app/controllers/campaign.server.controller'),
    users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
  app.route('/campaign/add').post( users.requiresLogin, campaigns.createCampaign);
  app.route('/campaign/:campaignId').get(campaigns.getCampaign);
  app.route('/campaign/:campaignId/edit').put(users.requiresLogin, campaigns.updateCampaign);
  app.route('/campaign/:campaignId').delete(users.requiresLogin, campaigns.deleteCampaign);
  app.route('/campaigns').get(campaigns.getCampaigns); 
  app.route('/campaigns/:userId').get(users.requiresLogin, campaigns.getUserCampaigns);
};
