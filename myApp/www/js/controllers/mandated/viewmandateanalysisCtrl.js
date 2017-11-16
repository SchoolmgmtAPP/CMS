angular.module('cmsapp.viewmandateanalysisCtrl', [])
.controller('viewmandateanalysisCtrl', function($scope,$rootScope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state,
                                    mandatedlistServices) {
  	var data = {
        service_item_id : $stateParams.service_item_id,
        issue_id        : $stateParams.issue_id
      }
       mandatedlistServices.view_mandated_analysis(data).then(function(response){
             $scope.listData = response.data.response[0];
             $rootScope.policy_quote = $scope.listData.policy_quote;
             $rootScope.masers_answer= $scope.listData.masers_answer;  
           });

})
.controller('policyquoteCtrlInViewMandate', function($scope,$rootScope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state) {

		$scope.policy_quote = $rootScope.policy_quote;
})
.controller('maseranswerCtrlInViewMandate', function($scope,$rootScope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state) {

		$scope.masers_answer = $rootScope.masers_answer;
		console.log($scope.masers_answer);
});