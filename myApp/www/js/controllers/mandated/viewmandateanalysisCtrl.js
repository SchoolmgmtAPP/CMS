angular.module('cmsapp.viewmandateanalysisCtrl', [])
.controller('viewmandateanalysisCtrl', function($scope,$rootScope, $stateParams,
                                    $ionicLoading,$ionicPopup,$state,
                                    mandatedlistServices,$filter,$sce) {
  	var data = {
        service_item_id : $stateParams.service_item_id,
        issue_id        : $stateParams.issue_id
      };
      $scope.data={};
       mandatedlistServices.view_mandated_analysis(data).then(function(response){
             console.log(response.data.response.length);
             if(response.data.response.length>0)
             {

                $scope.isMandateExist=true;
                $scope.listData =response.data.response[0];
                
                // $scope.data.policy_quote = $filter('limitTo')($scope.listData.policy_quote, 50);
                // $scope.data.policy_quote= $sce.trustAsHtml($scope.data.policy_quote);
                // $scope.data.masers_answer=$filter('limitTo')( $scope.listData.masers_answer, 50); 
                //  $scope.data.masers_answer=$sce.trustAsHtml($scope.data.masers_answer);


               
             }
             else
             {
                $scope.isMandateExist=false;

             }
             
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





