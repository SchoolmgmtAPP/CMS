angular.module('cmsapp.listIssueCtrl', [])
.controller('listIssueCtrl', function($scope, $stateParams,issueServices) {

  console.log($stateParams.id);

  var data ={
  	school_id : $stateParams.id
  }
  if ($stateParams.id) {
  	issueServices.get_issue_by_school(data).then(function(){

  	});
  }
});