angular.module('cmsapp.schoolCtrl', [])
.controller('schoolCtrl', function($scope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state,issueServices) {
   
  var datatoschool ={
      user_id : localStorage.getItem('user_id')
    }
    
    issueServices.view_school(datatoschool).then(function(response){
             $scope.SchoolList = response.data.response;
           });
    $scope.listIssue=function(school_id){
      $state.go('app.listissues',{id: school_id});
    }


});