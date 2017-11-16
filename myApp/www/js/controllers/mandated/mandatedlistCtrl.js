angular.module('cmsapp.mandatedlistCtrl', [])
.controller('mandatedlistCtrl', function($scope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state,mandatedlistServices) {
   $scope.groups = [];
  
    mandatedlistServices.get_service_category_byItem().then(function(response){
             $scope.groups = response.data.response;
           });
    mandatedlistServices.get_issue_byId().then(function(response){
             $scope.groups1 = response.data.response;
           });
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
   $scope.get_service_id=function(service_id){
      console.log(service_id);
      $scope.service_item_id = service_id; 
   }
   $scope.get_issue_id=function(issue_id){
      console.log(issue_id);
      $scope.issue_id = issue_id;
   }
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
    console.log('toggleGroup');
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
    console.log('isGroupShown');
  };


  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup1 = function(group1) {
    if ($scope.isGroupShown1(group1)) {
      $scope.shownGroup1 = null;
    } else {
      $scope.shownGroup1 = group1;
    }
    console.log('toggleGroup1');
  };
  $scope.isGroupShown1 = function(group1) {
    return $scope.shownGroup1 === group1;
    console.log('isGroupShown1');
  };
  

    $scope.view_mandate = function(){
      $state.go('app.viewmandateanalysis',{service_item_id:$scope.service_item_id,issue_id:$scope.issue_id});
    }

});