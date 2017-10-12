angular.module('cmsapp.listIssueCtrl', [])
.controller('listIssueCtrl', function($scope, $stateParams) {

  $scope.schools = [
    { schoolid: "1", schoolname : "School 1"},
    { schoolid: "2", schoolname : "School 2"},
    { schoolid: "3", schoolname : "School 3"}
  ];
  $scope.data={
    schoolid:'1',
    schoolname:'School 1'
  };
  $scope.changeSchool= function(newValue, oldValue) {
      $scope.data.schoolid=newValue.schoolid;
      $scope.data.schoolname=newValue.schoolname;
};

});