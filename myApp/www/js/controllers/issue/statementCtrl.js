angular.module('cmsapp.statementCtrl', [])
.controller('statementCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

		$scope.generatePDF = function() {
			console.log("in pdf");
		  kendo.drawing.drawDOM($(".idenCol")).then(function(group) {
		    kendo.drawing.pdf.saveAs(group, "Converted PDF.pdf");
		  });
		}
})	