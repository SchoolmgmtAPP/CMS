angular.module('cmsapp.listIssueCtrl', [])
.controller('listIssueCtrl', function($scope, $stateParams,issueServices) {

  console.log($stateParams.id);

  var data ={
  	school_id : $stateParams.id
  }
  if ($stateParams.id) {
  	issueServices.get_issue_by_school(data).then(function(res){
  		console.log(res);
  		$scope.issues = res.data.response;

  		 for (var i = $scope.issues.length - 1; i >= 0; i--) {
  		 	a = $scope.issues[i].added_date.split(" ");
			// date = a[0];
			$scope.issues[i].date1 = a[0];
  		 }
  		 console.log($scope.issues);
  	});
  }
});