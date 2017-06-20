(function () {
'use strict';

var x = "hello";
  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.array = [];
    $scope.result = "";

    $scope.checkLunchItems = function () {
      console.log("goes here");
      $scope.array = $scope.lunchItems.split(',');
      console.log($scope.array);

      if($scope.array.length < 3) {
        $scope.result = "Enjoy!";
      }
      if($scope.array.length > 3) {
        $scope.result = "Too much!";
      }
      return $scope.result;
    };
  }

})();
