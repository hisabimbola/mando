'use strict';

describe('transactionCtrl', function(){
  var transactionCtrl, 
      $scope,
      $httpBackend,
      mockBankerService;

beforeEach(module(ApplicationConfiguration.applicationModuleName));

beforeEach(function(){
  mockBankerService = {
    getSystemBalance: function() {
      return {
        balance: function(e, cb){
            cb(null, {balance: {
              value: {
                amount: 100
                }
              }
            });
        }     
      };
    },
    getJournalReports: function(){
      return {
        get: function(){ return {
          posted_lines:[{
            description: '{"name": "bayo", "email": "example@example.com"}'
          }]
        }

          ;}
      };
    },
    setCredentials : function(){},
    isBanker : function(){}
  };

  module(function ($provide) {
    $provide.value('bankerFactory', mockBankerService);
  });
});
beforeEach(inject(function($controller, $rootScope, _$httpBackend_, Authentication) {
  $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    Authentication.user = {
      roles: 'banker'
    };
    Authentication.requireLogin = function($state, stateName) {};
    Authentication.requireRole = function($state, role, stateName) {};
    Authentication.hasRole = function($state, role, stateName) {};
    transactionCtrl = $controller('transactionCtrl', {
      $scope: $scope,
      credentials:{data:{key_id: 'value22323', secret_id: 'a mock secret'}},
    });
}));
  it('should show the current balance in the system', function(){
      $scope.getBalance();
      expect($scope.balance.amount).toBe(100);
  });

  it('should show the journal reports in the system', function(){
      $scope.getJournals(function(){

      expect($scope.journal[0].description.name).toBe('bayo');
      });
  });
});


