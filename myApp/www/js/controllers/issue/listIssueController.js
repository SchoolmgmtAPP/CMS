angular.module('cmsapp.listIssueCtrl', [])
.controller('listIssueCtrl', function($scope, $stateParams,issueServices, $rootScope,$filter) {

  console.log($stateParams.id);
  $scope.data={};
  if($stateParams.id=="")
  {
    var datatoschool ={
      user_id : localStorage.getItem('user_id')
    }
    
    issueServices.view_school(datatoschool).then(function(response){
        $rootScope.SchoolList = response.data.response;       
       
        $scope.data.school_id=$rootScope.SchoolList[0].app_school_id;
        $rootScope.schoolName=$rootScope.SchoolList[0].school_name;
    });
  }
  else
  {
      $scope.data.school_id=$stateParams.id;
  }
  var data ={
  	school_id : $scope.data.school_id
  }
  
  if ($scope.data.school_id) {
  	issueServices.get_issue_by_school(data).then(function(res){
  		console.log(res);
  		$scope.issues = res.data.response;
       var j=1,k=1;
  		for (var i = $scope.issues.length - 1; i >= 0; i--) {
  		 	  a = $scope.issues[i].added_date.split(" ");
			   // date = a[0];
			   $scope.issues[i].date1 = a[0];
         $scope.issues[i].groupid=k;
          j++;
          if(j>3)
          {
            j=1;
            k++;
          }
  		 }
  		 console.log($scope.issues);
  	});
  }

  $scope.changeSchool=function(newValue, oldValue)
  {
      $scope.data.school_id=newValue.school_id;
      $rootScope.schoolName=newValue.school_name;
      issueServices.get_issue_by_school(data).then(function(res){
        console.log(res);
        $scope.issues = res.data.response;
         var j=1,k=1;
         for (var i = $scope.issues.length - 1; i >= 0; i--) {
          a = $scope.issues[i].added_date.split(" ");
          $scope.issues[i].groupid=k;
          j++;
          if(j>3)
          {
            j=1;
            k++;
          }
        // date = a[0];
        $scope.issues[i].date1 = a[0];
       }
       console.log($scope.issues);
    });

  }

})
.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});