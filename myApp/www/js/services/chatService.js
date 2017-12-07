angular.module('cmsapp.chatservices', [])
.factory('chatservices', function($http, $q, $rootScope, $ionicLoading, $ionicPopup,Constants){

  return{

    list_message: function(data1){
       var deffered = $q.defer();
      $http({
          url:Constants.API_URL['list_message_url'],
          method: "POST",
          headers: {
                    'Content-Type': Constants.API_HEADERS['content_type']
                },
          transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        },
          data:data1})
      .success(function (response) {
          console.log(response);
          deffered.resolve(response);
      }).error(function (response) {
          console.log(response);
          deffered.resolve(response);
      });
      return deffered.promise;
  }
}
});