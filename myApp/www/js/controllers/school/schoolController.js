angular.module('cmsapp.schoolCtrl', [])
.controller('schoolCtrl', function($scope, $stateParams) {
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

/*View issue accordion*/
 $scope.groups2 = [];
  $scope.groups2 = [
    { name: 'Engage people', stars:'0/10 stars', id: 1, items: [{ subName: 'SubBubbles1', subId: 'Identify concerned or affected people.',state:'app.identifyconcerned' }, { subName: 'SubBubbles2', subId: 'Get School Head to confirm issue.',state:'app.confirmissue'}]},
    { name: 'Access information', stars:'0/15 stars', id: 1, items: [{ subName: 'SubGrup1', subId: 'Identify needed information',state:'app.neededinfo' }, { subName: 'SubGrup1', subId: 'Request and access identified information',state:'app.accessidentifiedinfo' },{ subName: 'SubGrup1', subId: 'Review information',state:'app.reviewinfo' },{ subName: 'SubGrup1', subId: 'Analyze issue based on information', state:'app.analyzeissued'}]},
    { name: 'Feedback', stars:'0/30 stars', id: 1, items: [{ subName: 'SubGrup1', subId: 'Write feedback report', state:'app.feedbackreport' }, { subName: 'SubGrup1', subId: 'Get people to support feedback report' }, { subName: 'SubGrup1', subId: 'Send report to school and mandated office' }, { subName: 'SubGrup1', subId: 'Get report stamped “Received”' }]},
    { name: 'Resolve issue', stars:'0/105 stars', id: 1, items: [{ subName: 'SubGrup1', subId: 'Get government office to acknowledge issue.' }, { subName: 'SubGrup1', subId: 'Get government office to agree on a solution.' }, { subName: 'SubGrup1', subId: 'Share agreed solution with concerned/affected people.' }, { subName: 'SubGrup1', subId: 'Follow up implementation of agreement.' }, { subName: 'SubGrup1', subId: 'Witness implementation of solution.'}]},
    { name: 'Tell story of change', stars:'Bonus 50 stars', id: 1}, /*, items: [{ subName: 'SubGrup1', subId: 'Ca1' }, { subName: 'SubGrup1', subId: 'Cb2' }, { subName: 'SubGrup1', subId: 'Cc3' }]*/
  ];
  
  
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

});