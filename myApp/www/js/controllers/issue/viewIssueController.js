angular.module('cmsapp.viewIssueCtrl', [])
.controller('viewIssueCtrl', function($scope,$rootScope, $stateParams,issueServices) {

    $scope.startSC='startSC';
    console.log($stateParams.issue_id);  
    $scope.feed = null;
    localStorage.setItem('issue_id',$stateParams.issue_id);
    var data ={
      issue_id : $stateParams.issue_id 
    }
    $scope.stateToGo = 'app.previewfeedbackreport'; 
    $rootScope.loadingOn();
    issueServices.getIssue_details(data).then(function(response){
      $scope.issueData        = response.data.response.issue_data;
      $rootScope.engage       = response.data.response.engage;
      $rootScope.feedback     = response.data.response.feedback;
      $rootScope.issue_access = response.data.response.issue_access;
      $rootScope.issue_story  = response.data.response.issue_story;
      $rootScope.resolve      = response.data.response.resolve;
      console.log($scope.issueData);
      $scope.feed = $rootScope.feedback;
       if ($scope.feed == null || $scope.feed.feedback_text =='') {
              $scope.stateToGo = 'app.feedbackreport'; 
              console.log($rootScope.feedback);
        }else{
            console.log($rootScope.feedback);
            $scope.stateToGo = 'app.previewfeedbackreport';  
        }
        $scope.loadAccordian();
        $rootScope.loadingOff();
    });  
/*View issue accordion*/
  
   $scope.loadAccordian=function()
   {      
            

      $scope.groups2 = [];
      $scope.groups2 = [
        { name: 'Engage people', stars:'0/10 stars', id: 1, items: [{ subName: 'SubBubbles1', subId: 'Identify concerned or affected people.',state:'app.identifyconcerned' }, { subName: 'SubBubbles2', subId: 'Get School Head to confirm issue.',state:'app.confirmissue'}]},
        { name: 'Access information', stars:'0/15 stars', id: 1, items: [{ subName: 'SubGrup1', subId: 'Identify needed information',state:'app.neededinfo' }, { subName: 'SubGrup1', subId: 'Request and access identified information',state:'app.accessidentifiedinfo' },{ subName: 'SubGrup1', subId: 'Review information',state:'app.reviewinfo' },{ subName: 'SubGrup1', subId: 'Analyze issue based on information', state:'app.analyzeissued'}]},
        { name: 'Feedback', stars:'0/30 stars', id: 1, items: [{ subName: 'SubGrup1', subId: 'Write feedback report', state:$scope.stateToGo }, { subName: 'SubGrup1', subId: 'Get people to support feedback report', state:'app.feedbacksupport' }, { subName: 'SubGrup1', subId: 'Send report to school and mandated office', state:'app.sendreport' }, { subName: 'SubGrup1', subId: 'Get report stamped “Received”', state:'app.reportstamped' }]},
        { name: 'Resolve issue', stars:'0/105 stars', id: 1, items: [{ subName: 'SubGrup1', subId: 'Get government office to acknowledge issue.', state:'app.acknowledgeissue' }, { subName: 'SubGrup1', subId: 'Get government office to agree on a solution.', state:'app.governmentagree' }, { subName: 'SubGrup1', subId: 'Share agreed solution with concerned/affected people.', state:'app.shareagreedsolution' }, { subName: 'SubGrup1', subId: 'Follow up implementation of agreement.',state:'app.followup' }, { subName: 'SubGrup1', subId: 'Witness implementation of solution.', state:'app.witnessimplementation'}]},
        { name: 'Tell story of change', stars:'Bonus 50 stars', id: 1,state:'app.changestory'}, /*, items: [{ subName: 'SubGrup1', subId: 'Ca1' }, { subName: 'SubGrup1', subId: 'Cb2' }, { subName: 'SubGrup1', subId: 'Cc3' }]*/
      ];
  }
  
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup2 = function(group2) {
    if ($scope.isGroupShown2(group2)) {
      $scope.shownGroup2 = null;
    } else {
      $scope.shownGroup2 = group2;
    }
  };
  $scope.isGroupShown2 = function(group2) {
    return $scope.shownGroup2 === group2;
  };

  $scope.startSolutionChaser=function()
  {
    $scope.startSC="";
  }



});