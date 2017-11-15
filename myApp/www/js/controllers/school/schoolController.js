angular.module('cmsapp.schoolCtrl', [])
.controller('schoolCtrl', function($scope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state,issueServices) {
   $scope.groups = [];
  
  $scope.groups = [
    { name: 'A', id: 1, items: [{ subName: 'SubBubbles1', subId: 'Aa' }, { subName: 'SubBubbles2', subId: 'Ab' },{ subName: 'SubBubbles3', subId: 'Ac' }]},
    { name: 'B', id: 1, items: [{ subName: 'SubGrup1', subId: 'Ba' }, { subName: 'SubGrup1', subId: 'Bb' },{ subName: 'SubGrup1', subId: 'Bc' }]},
    { name: 'C', id: 1, items: [{ subName: 'SubGrup1', subId: 'Ca' }, { subName: 'SubGrup1', subId: 'Cb' }, { subName: 'SubGrup1', subId: 'Cc' }]},
  ];
  
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };


/*second accordion*/
  $scope.groups1 = [
    { name: 'A', id: 1, items: [{ subName: 'SubBubbles1', subId: 'Aa1' }, { subName: 'SubBubbles2', subId: 'Ab2' },{ subName: 'SubBubbles3', subId: 'Ac3' }]},
    { name: 'B', id: 1, items: [{ subName: 'SubGrup1', subId: 'Ba1' }, { subName: 'SubGrup1', subId: 'Bb2' },{ subName: 'SubGrup1', subId: 'Bc3' }]},
    { name: 'C', id: 1, items: [{ subName: 'SubGrup1', subId: 'Ca1' }, { subName: 'SubGrup1', subId: 'Cb2' }, { subName: 'SubGrup1', subId: 'Cc3' }]},
  ];
  
  
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
  };
  $scope.isGroupShown1 = function(group1) {
    return $scope.shownGroup1 === group1;
  };
  var datatoschool ={
      user_id : localStorage.getItem('user_id')
    }
    
    issueServices.view_school(datatoschool).then(function(response){
             $scope.SchoolList = response.data.response;
           });

});