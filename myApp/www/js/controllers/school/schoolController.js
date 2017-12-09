angular.module('cmsapp.schoolCtrl', [])
.filter('groupBy', function() {
    return _.memoize(function(items, field) {
            return _.groupBy(items, field);
        });
})
.controller('schoolCtrl', function($scope,$rootScope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state,issueServices) {
   
  var datatoschool ={
      user_id : localStorage.getItem('user_id')
    }
    
    issueServices.view_school(datatoschool).then(function(response){
             $scope.SchoolList = response.data.response;
           });
    
    $scope.listIssue=function(school_id){
      $state.go('app.listissues',{id: school_id.app_school_id});

      $rootScope.schoolName = school_id.school_name;
    }

    $scope.delete_school = function(app_school_id){
       console.log(app_school_id.app_school_id);
        var data ={
          school_id : app_school_id.app_school_id
        }
        
      issueServices.delete_school(data).then(function(res){
        // console.log(res);
        var index = $scope.SchoolList.indexOf(app_school_id);
          console.log(index);
          $scope.SchoolList.splice(index, 1);

      });
    }
});