angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})
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
});
