angular.module('cmsapp.needInfoCtrl', [])
.controller('needInfoCtrl', function($scope, $stateParams) {
      $scope.selection = [];

     $scope.output =[];
    
    $scope.test={'other':''}

    $scope.records = [{
        id: 1,
        value: "One",
    }, {
        id: 2,
        value: "Two",
    }, {
        id: 3,
        value: "Three",
    }];   

    var data =[];
      // $scope.Products = [{id:1,name:"Apple"}, {id:2,name:"Banana"}, {id:3,name:"Carrort"}, {id:4,name:"Dart"}];
      console.log($scope.test.other);
      $scope.save = function(){

          // console.log($scope.test.other);
          
        if ($scope.test.other !="" && typeof $scope.test.other != 'undefined') {
          $scope.output.undefined.push($scope.test.other);
        }
        
        console.log($scope.output.undefined);
        alert($scope.output.undefined);
      } 
     
});