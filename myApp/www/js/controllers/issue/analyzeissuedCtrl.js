angular.module('cmsapp.analyzeissuedCtrl', [])
.controller('analyzeissuedCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {
	
	$scope.learner={};
	$scope.step={};
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


		$scope.load_people = $rootScope.issue_access.effect_on_learners.split(',');
		console.log($scope.load_people);
		angular.forEach($scope.load_people, function(value, key) {
			
				if (value == 'low grade') {
					$scope.learner[0] =true;					
				}else if(value == 'classes disrupted'){
					$scope.learner[1] =true;
				}else if(value == 'learners fail to attend classes'){
					$scope.learner[2] =true;
				}else if(value == 'low morale of teachers'){
					$scope.learner[3] =true;
				}else if(value == 'low morale of community'){
					$scope.learner[4] =true;
				}else{
					$scope.learner[5] =true;
				}
		});

		$scope.load_next_steps = $rootScope.issue_access.next_steps.split(',');
		console.log($scope.load_next_steps);
		angular.forEach($scope.load_next_steps, function(value, key) {
			
				if (value == 'need more info') {
					$scope.step[0] =true;					
				}else if(value == 'need more info'){
					$scope.step[1] =true;
				}else if(value == 'report to higher DepEd office'){
					$scope.step[2] =true;
				}else if(value == 'inquire with other agency'){
					$scope.step[3] =true;
				}else if(value == 'identify resources'){
					$scope.step[4] =true;
				}else if(value == 'file complaint'){
					$scope.step[5] =true;
				}else if(value == 'identify other stakeholders who can help'){
					$scope.step[6] =true;
				}else{
					$scope.step[7] =true;
				}
		});

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