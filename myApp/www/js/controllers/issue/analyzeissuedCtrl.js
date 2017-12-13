angular.module('cmsapp.analyzeissuedCtrl', [])
.controller('analyzeissuedCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {
	if ($rootScope.issue_access != null) {
		$scope.data ={
			'issue_exist_from'			: $rootScope.issue_access.issue_exist_from,
			'issue_exist_from_source'	: $rootScope.issue_access.issue_exist_from_source,
			'server_type'				: $rootScope.issue_access.server_type,
			'server_type_source'		: $rootScope.issue_access.server_type_source,
			'effect_on_learners'		: $rootScope.issue_access.effect_on_learners,
			'effect_on_learners_source'	: $rootScope.issue_access.effect_on_learners_source,
			'attention_received'		: $rootScope.issue_access.attention_received,
			'attention_received_source'	: $rootScope.issue_access.attention_received_source,
			'is_report_sent'			: $rootScope.issue_access.is_report_sent,
			'is_report_sent_source'		: $rootScope.issue_access.is_report_sent_source,
			'next_steps'				: $rootScope.issue_access.next_steps,
			'next_steps_source'			: $rootScope.issue_access.next_steps_source
		}
	}else{
		$scope.data ={
			'issue_exist_from'			: '',
			'issue_exist_from_source'	: '',
			'server_type'				: '',
			'server_type_source'		: '',
			'effect_on_learners'		: '',
			'effect_on_learners_source'	: '',
			'attention_received'		: '',
			'attention_received_source'	: '',
			'is_report_sent'			: '',
			'is_report_sent_source'		: '',
			'next_steps'				: '',
			'next_steps_source'			: ''		
		}
	}

	
	console.log($scope.data);
});