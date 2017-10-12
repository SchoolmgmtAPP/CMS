// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('cmsapp',[
	'ionic',
	'ionic-modal-select',
	'cmsapp.AppCtrl',
	'cmsapp.schoolCtrl',
	'cmsapp.listIssueCtrl'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('');
  $stateProvider

    .state('app', {
	    url: '/app',
	    abstract: true,
	    templateUrl: 'templates/menu.html',
	    //controller: 'AppCtrl'
  	})

  	.state('app.search', {
    	url: '/search',
    	views: {
	      'menuContent': {
	        templateUrl: 'templates/search.html'
	      }
    	}
  	})
  	.state('home', {
    	url: '/home',
		templateUrl: 'templates/home.html'
	    
 	})

	.state('login', {
	    url: '/login',
	    templateUrl: 'templates/login.html'	      
	})
	.state('app.dashboard', {
	    url: '/dashboard',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/dashboard.html'
	      }
	    }
	  })
	.state('app.schools', {
	    url: '/schools',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/school.html'
	      }
	    }
	  })
	.state('app.listschools', {
	    url: '/listschools',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/list-schools.html'
	      }
	    }
	  })
	.state('registration', {
	    url: '/registration',
	    templateUrl: 'templates/registration.html'
	      
	  })
	.state('app.changepassword', {
	    url: '/changepassword',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/change-password.html'
	      }
	    }
	  })	
	.state('resetpassword', {
	    url: '/resetpassword',
	    templateUrl: 'templates/reset-password.html'
	     
	  })
	.state('resetchangepassword', {
	    url: '/resetchangepassword',	   
	    templateUrl: 'templates/reset-change-password.html'
	     
	  })
	.state('app.editprofile', {
	    url: '/editprofile',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/edit-profile.html'
	      }
	    }
	  })
	.state('app.viewprofile', {
	    url: '/viewprofile',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/view-profile.html'
	      }
	    }
	  })
	.state('app.addschool', {
	    url: '/addschool',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/addschool.html'
	      }
	    }
	  })
	.state('app.searchschool', {
	    url: '/searchschool',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/search-school.html',
	        controller:'schoolCtrl'
	      }
	    }
	  })
	.state('app.ratings', {
	    url: '/ratings',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/ratings.html'
	      }
	    }
	  })
	.state('app.listissues', {
	    url: '/listissues',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/listissues.html',
	      //  controller:'listIssueCtrl'
	      }
	    }
	  })
	.state('app.viewissue', {
	    url: '/viewissue',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/viewissue.html',
	        controller:'schoolCtrl'
	      }
	    }
	  })
	.state('app.addissue', {
	    url: '/addissue',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/add-issue.html'
	      }
	    }
	  })
	.state('app.identifyconcerned', {
	    url: '/identifyconcerned',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/identifyconcerned.html'
	      }
	    }
	  })
	.state('app.statementform', {
	    url: '/statementform',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/statement-form.html'
	      }
	    }
	  })
	.state('app.confirmissue', {
	    url: '/confirmissue',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/head-confirm-issue.html'
	      }
	    }
	  })
	.state('app.cooperationform', {
	    url: '/cooperationform',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/cooperationform.html'
	      }
	    }
	  })
	.state('app.neededinfo', {
	    url: '/neededinfo',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/needed-info.html'
	      }
	    }
	  })
	.state('app.accessidentifiedinfo', {
	    url: '/accessidentifiedinfo',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/access-identified-info.html'
	      }
	    }
	  })
	.state('app.reviewinfo', {
	    url: '/reviewinfo',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/review-information.html'
	      }
	    }
	  })
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
