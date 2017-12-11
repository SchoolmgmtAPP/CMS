angular.module('cmsapp.cooperationCtrl', [])
.directive('onFileChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.onFileChange);

      element.bind('change', function() {
        scope.$apply(function() {
          var files = element[0].files;
          if (files) {
            onChangeHandler(files);
          }
        });
      });

    }
  };
})	
.controller('cooperationCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

	$('.downloadBtn').bind("click" , function () {
        $('#fileinput').click();
        
    });
	
		function getBase64(file) {
			   var reader = new FileReader();
			   reader.readAsDataURL(file);
			   reader.onload = function () {
			     console.log(reader.result);
			     $scope.basedata = reader.result;
			     return reader.result;
			   };
			   reader.onerror = function (error) {
			     console.log('Error: ', error);
			   };
			}

		   	$scope.onFilesSelected = function(files) {
		     console.log("files - " + files[0]);
		     if (files[0]) {
		     $rootScope.loadingOn();
		     
		     var base64data = getBase64(files[0]);
		     
		     console.log($scope.basedata);
		     	$timeout(function() {
				     	var data = {
				   			issue_id : localStorage.getItem('issue_id'),
							signed_statment_form : $scope.basedata
				   		}
				        issueServices.upload_engagedform(data).then(function(response){
				        	console.log(response);
				        	$rootScope.loadingOff();
				        	var alertPopup = $ionicPopup.alert({
					           title: response.data.success == 'true' ? 'Success' : 'Fail',
					           template: response.data.message,
					           cssClass:"messagePopup"
					         });
						$timeout(function() {
						     	alertPopup.close(); //close the popup after 3 seconds for some reason
							}, 3000);


				        });
		         }, 3000);
		     }
			};

			

})
