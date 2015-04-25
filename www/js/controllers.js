angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, Login, $location) {
  $scope.doLogin = function(user, pass) {
    $scope.loginError = false;

    var userData = { user: user, pass: pass };

    Login.do(userData).then(function(response) {
      if(response.status == 200) {
        window.localStorage.user = user;
        $location.path('/tab/dash');
      }
    }).catch(function(err) {
      $scope.loginError = true;
      console.log(err)
    });
  }
})

.controller('DashCtrl', function($scope, Expenses, $location, LoginService) {
  LoginService.checkLogin();

  Expenses.all().then(function(response) {
    $scope.expenses = response.data;
  });

  $scope.go = function(path) {
    console.log(path);
    $location.path(path);
  };
})

.controller('AddCtrl', function($scope, $location, Expenses, LoginService) {
  LoginService.checkLogin();

  $scope.expense = {};

  $scope.addExpense = function() {
    Expenses.add($scope.expense).then(function() {
      $location.path('/tab/dash');
    });
  };
})

.controller('ExpenseCtrl', function($scope, $stateParams, Expenses, LoginService) {
  LoginService.checkLogin();

  Expenses.get($stateParams.id).then(function(response) {
    $scope.expense = response.data;
  });
})

.controller('AccountCtrl', function($scope, $location, LoginService) {
  LoginService.checkLogin();

  $scope.doLogout = function() {
    window.localStorage.clear('user');
    $location.path('/login');
  }

  $scope.settings = {
    enableFriends: true
  };
});
