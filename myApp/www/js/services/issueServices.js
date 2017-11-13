angular.module('cmsapp.issueServices', [])
.factory('issueServices', function($http, $q, $rootScope,Constants){

  return{
    saveissue: function(data1){
     return $http({
          url:Constants.API_URL['add_issue_url'],
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
          data:data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      },
    view_school: function(data1){
     return $http({
          url:Constants.API_URL['view_school_url'],
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
          data:data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      },
    get_service_category: function(){
      
     return $http({
          url:Constants.API_URL['get_service_category_url'],
          method: "POST",
          headers: {
                    'Content-Type': Constants.API_HEADERS['content_type']
                },
          transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        }
      	  }).success(function (response) {
	          console.log(response);
	      }).error(function (response) {
	          console.log(response);
	      });
  		},
  get_service_item: function(){
      
     return $http({
          url:Constants.API_URL['get_service_item_url'],
          method: "POST",
          headers: {
                    'Content-Type': Constants.API_HEADERS['content_type']
                },
          transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        }
      	  }).success(function (response) {
	          console.log(response);
	      }).error(function (response) {
	          console.log(response);
	      });
  		},
  get_issue_type: function(){
      
     return $http({
          url:Constants.API_URL['get_issue_type_url'],
          method: "POST",
          headers: {
                    'Content-Type': Constants.API_HEADERS['content_type']
                },
          transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        }
      	  }).success(function (response) {
	          console.log(response);
	      }).error(function (response) {
	          console.log(response);
	      });
  		}
	}
});