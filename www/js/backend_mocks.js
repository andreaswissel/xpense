/*
"use strict";
angular.module('starter')
  .run(function($httpBackend) {
    var sampleExpenses = [{
      id: 0,
      title: '',
      amount: 999.99,
      timestamp: 'Fri Apr 24 2015 18:42:10 GMT+0200 (CEST)',
      category: 'Groceries'
    },{
      id: 1,
      title: '',
      amount: 13.37,
      timestamp: 'Fri Apr 24 2015 15:42:10 GMT+0200 (CEST)',
      category: 'Lifestyle'
    },{
      id: 2,
      title: '',
      amount: 5.40,
      timestamp: 'Fri Apr 24 2015 08:42:10 GMT+0200 (CEST)',
      category: 'Lifestyle'
    },{
      id: 3,
      title: '',
      amount: 13.37,
      timestamp: 'Fri Apr 24 2015 08:41:10 GMT+0200 (CEST)',
      category: 'Lifestyle'
    }];

    $httpBackend.whenGET(/^\/api\//).passThrough();
    $httpBackend.whenGET(/css\//).passThrough();
    $httpBackend.whenGET(/templates\//).passThrough();
    /!*$httpBackend.when('GET','/api/expenses').respond(200, sampleExpenses);
    $httpBackend.when('GET','/api/expenses/0').respond(200, sampleExpenses[0]);
    $httpBackend.when('GET','/api/expenses/1').respond(200, sampleExpenses[1]);
    $httpBackend.when('GET','/api/expenses/2').respond(200, sampleExpenses[2]);
    $httpBackend.when('GET','/api/expenses/3').respond(200, sampleExpenses[3]);*!/
  });*/
