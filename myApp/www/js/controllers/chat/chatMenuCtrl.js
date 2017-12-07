angular.module('cmsapp.chatMenuCtrl', ['ionic'])
.controller('chatMenuCtrl', function($scope, $timeout, $ionicScrollDelegate,$state,$location,chatservices,$filter) {

	$scope.DetailPage = function(){
		$state.go('app.viewchat');
	}

	var data = {
		user_id : localStorage.getItem('user_id')
	}
	var a,date,time,date1,date2,days,timedata;
	chatservices.list_message(data).then(function(res){
		console.log(res);
		$scope.chatData = res.response;
		 
		for (var i = $scope.chatData.length - 1; i >= 0; i--) {
			a = $scope.chatData[i].added_date.split(" ");
			date = a[0];
			time = a[1];	
			
			timedata = time.split(":");
			if (timedata[0] > 12) {
				timedata[0] = timedata[0] -12;
			}

			$scope.chatData[i].date = date;
			var formattedDate =$filter('date')(date,"dd/MM/yyyy"); 


			$scope.chatData[i].time = time;
			  date1 = new Date();
			  if (date1.getHours() > 12 ) {
			  	date1.setHours(date1.getHours() - 12);
			  }
			 date2 = new Date(date);
// console.log("date system",date1);
// console.log(date2);

			days = $scope.calcDiff(date1,date2);
			// console.log(days);
			if (days == 0 ) {
				$scope.chatData[i].cdate = timedata[0]+":"+timedata[1];
			}else if(days == 1){
				$scope.chatData[i].cdate = 'yesterday';
			}else{
				$scope.chatData[i].cdate = formattedDate;
			}
		}
		console.log($scope.chatData);
	});	

	$scope.calcDiff = function(firstDate, secondDate){
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return diffDays;
}
});