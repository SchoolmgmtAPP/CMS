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
          url:Constants.API_URL['view_school_by_users_url'],
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
  		},
  get_issue_by_school: function(data1){
      
     return $http({
          url:Constants.API_URL['view_issue_by_school'],
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
            data : data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      },
      delete_school: function(data1){
      
     return $http({
          url:Constants.API_URL['remove_school_url'],
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
            data : data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      },
      getIssue_details: function(data1){
     return $http({
          url:Constants.API_URL['view_issue_details_url'],
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
            data : data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      },
      upload_engagedform: function(data1){
     return $http({
          url:Constants.API_URL['upload_engagedform_url'],
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
            data : data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      },
      engagepeople_saved: function(data1){
     return $http({
          url:Constants.API_URL['engagepeople_saved_url'],
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
            data : data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      },
      save_accessinfo: function(data1){
     return $http({
          url:Constants.API_URL['save_accessinfo_url'],
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
            data : data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      }
	}
});