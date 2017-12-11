// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var mainUrl = 'http://webdemonstration.xyz/cmsapp/api/';

angular.module('cmsapp',[
	'ionic',
	'ngCordova',
	'ionic-modal-select',
	'ngStorage',
	'ui.bootstrap',
	'cmsapp.chatCtrl',
	'cmsapp.AppCtrl',
	'cmsapp.schoolCtrl',
	'cmsapp.listIssueCtrl',
	'cmsapp.viewIssueCtrl',
	'cmsapp.addSchoolCtrl',
	'cmsapp.needInfoCtrl',
	'cmsapp.chatMenuCtrl',
	'plgn.ionic-segment',
	'angucomplete-alt',
	'cmsapp.registrationCtrl',
	'cmsapp.loginservices',
	'cmsapp.schoolServices',
	'cmsapp.loginCtrl',
	'cmsapp.resetpasswordCtrl',
	'cmsapp.updateProfileCtrl',
	'cmsapp.addissueCtrl',
	'cmsapp.issueServices',
	'cmsapp.profileService',
	'cmsapp.mandatedlistCtrl',
	'cmsapp.mandatedlistServices',
	'cmsapp.firstCtrl',
	'cmsapp.collaboratorServices',
	'cmsapp.collaboratorlistCtrl',
	'cmsapp.viewmandateanalysisCtrl',
	'cmsapp.chatservices',
	'cmsapp.changepassCtrl',
	'cmsapp.identifyconcernedCtrl',
	'cmsapp.reviewinfoCtrl',
	'cmsapp.statementCtrl',
	'cmsapp.cooperationCtrl',
	'cmsapp.accessidentifiedCtrl',
])

.constant('Constants', {
    // EVENT: {
    //     pageSize: '9'
    // },

    API_URL: {
        login_url				: mainUrl + 'login',
        register_url			: mainUrl + 'register_user',
        reset_password_url 		: mainUrl + 'login/reset_password',
        change_password_url		: mainUrl + 'change_password',
        verifycode_url			: mainUrl + 'register_user/verify',
        deleteAccount_url		: mainUrl + 'register_user/delete',
        addschool_url			: mainUrl + 'school/add_school',
        getRegions_url			: mainUrl + 'general/get_regions',
        getDivisons_url			: mainUrl + 'general/get_division',
        getCities_url			: mainUrl + 'general/get_cities',
        view_school_url			: mainUrl + 'school/view_school',
        get_service_category_url: mainUrl + 'general/get_service_category',
        get_service_item_url	: mainUrl + 'general/get_service_item',
        get_issue_type_url		: mainUrl + 'general/get_issue_type',
        add_issue_url			: mainUrl + 'issue/add_issue',
        get_userProfile_url		: mainUrl + 'login/get_profile',
        updateprofile_url		: mainUrl + 'login/update_profile',
        view_school_by_users_url: mainUrl + 'school/view_school_by_users', //used two time one addissue and list school
		view_issue_by_school	: mainUrl + 'issue/view_issue',
		categoryWithItem_url 	: mainUrl + 'general/categoryWithItem',
		IssueTypeWithIssue_url	: mainUrl + 'general/IssueTypeWithIssue',
		send_invitation_url		: mainUrl + 'collaborator/send_invitation',
		invited_collaborator_url: mainUrl + 'collaborator/view_invited_collaborator',
		view_collaborator_url	: mainUrl + 'collaborator/view_collaborator',
		cancel_invitation_url	: mainUrl + 'collaborator/cancel_invitation',
		view_mandated_ana_url	: mainUrl + 'mandate/list_mandate',
		resend_verify_code_url  : mainUrl + 'register_user/resendVerification',
		list_message_url		: mainUrl + 'chat/list_message',
		view_message_url		: mainUrl + 'chat/view_message',
		send_message_url		: mainUrl + 'chat/send_message',
		resetpassword_data_url	: mainUrl + 'login/resetpassword_data',
		remove_school_url   	: mainUrl + 'school/remove_school',
		delete_message_url		: mainUrl + 'chat/delete_message',
		view_issue_details_url	: mainUrl + 'issue/view_issue_details',
		upload_engagedform_url	: mainUrl + 'solution_chaser/upload_engagedform',
		engagepeople_saved_url	: mainUrl + 'solution_chaser/engagepeople_savedata'
    },

    API_HEADERS: {
        content_type: 'application/x-www-form-urlencoded',
    }
})
.controller('mainCtrl',function($scope,$ionicLoading,$state,Constants,$rootScope){

	$rootScope.loadingOn = function(){
		$ionicLoading.show({
		          content: 'Loading',
		          animation: 'fade-in',
		          showBackdrop: true,
		          maxWidth: 200,
		          showDelay: 0
		        });
	}
	$rootScope.loadingOff = function(){
		$ionicLoading.hide();
	}
})
.run(function($ionicPlatform,$location,$ionicHistory) {
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

    $ionicPlatform.registerBackButtonAction(function (event) {
       console.log($location.path());
       if ($location.path() === "/home" || $location.path() === "/dashboard") {
         event.preventDefault();
       } else {
         $ionicHistory.goBack();
       }
    }, 100);
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('');
  $stateProvider

    .state('app', {
	    url: '/app',
	    abstract: true,
	    templateUrl: 'templates/menu.html',
	    controller: 'AppCtrl'
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
		templateUrl: 'templates/home.html',
		controller : 'firstCtrl',
		cache	   : false
 	})

	.state('login', {
	    url: '/login',
	    templateUrl: 'templates/login.html',
	    controller : 'loginCtrl',
	    cache	   :  false	      
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
	        templateUrl: 'templates/list-schools.html',
	        controller :'schoolCtrl'
	      }
	    }
	  })
	.state('registration', {
	    url: '/registration',
	    templateUrl: 'templates/registration.html',
	    controller : 'registrationCtrl',
	    cache	   : false
	      
	  })
	// this is a reset password 
	.state('changepassword', {
	    url: '/changepassword',
	     	templateUrl: 'templates/change-password.html',
	        controller : 'changepassCtrl',
	        cache	   : false
	  })	
	.state('resetpassword', {
	    url: '/resetpassword',
	    templateUrl: 'templates/reset-password.html',
	    controller : 'resetpasswordCtrl',
	    cache	   : false
	     
	  })
	.state('verifycode', {
	    url: '/verifycode',
	    templateUrl: 'templates/verify-code.html',
	    controller : 'resetpasswordCtrl',
	    cache	   : false
	     
	  })
	//this is change password
	.state('app.resetchangepassword', {
	    url: '/resetchangepassword',	   
	    views: {
	      'menuContent': {
	    	templateUrl: 'templates/reset-change-password.html',
	    	controller : 'resetpasswordCtrl',
	    	cache	   : false
	     }
	 	}
	  })
	.state('app.editprofile', {
	    url: '/editprofile',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/edit-profile.html',
	        controller : 'updateProfileCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.viewprofile', {
	    url: '/viewprofile',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/view-profile.html',
	        controller : 'updateProfileCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.addschool', {
	    url: '/addschool',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/addschool.html',
	         controller:'addSchoolCtrl',
	         cache	   : false
	      }
	    }
	  })
	.state('app.searchschool', {
	    url: '/searchschool',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/search-school.html',
	        controller:'mandatedlistCtrl'
	      }
	    }
	  })
	.state('app.viewmandateanalysis', {
	    url: '/viewmandateanalysis/:service_item_id/:issue_id',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/view-mandate-analysis.html',
	        controller : 'viewmandateanalysisCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.policyquote', {
	    url: '/policyquote',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/policy-quote.html',
	        controller : 'policyquoteCtrlInViewMandate',
	        cache	   : false
	      }
	    }
	  })
	.state('app.maseranswer', {
	    url: '/maseranswer',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/maser-answer.html',
	        controller : 'maseranswerCtrlInViewMandate',
	        cache	   : false
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
	    url: '/listissues/:id',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/listissues.html',
	        controller:'listIssueCtrl',
	        cache: false
	      }
	    }
	  })
	.state('app.viewissue', {
	    url: '/viewissue/:issue_id',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/viewissue.html',
	        controller:'viewIssueCtrl',
	        cache: false
	      }
	    }
	  })
	.state('app.addissue', {
	    url: '/addissue',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/add-issue.html',
	        controller : 'addissueCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.identifyconcerned', {
	    url: '/identifyconcerned',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/identifyconcerned.html',
	        controller : 'identifyconcernedCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.statementform', {
	    url: '/statementform',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/statement-form.html',
	        controller : 'statementCtrl',
	        cache	   : false
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
	        templateUrl: 'templates/cooperationform.html',
	        controller : 'cooperationCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.neededinfo', {
	    url: '/neededinfo',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/needed-info.html',
	        controller : 'needInfoCtrl',
	        cache 	   : false
	      }
	    }
	  })
	.state('app.accessidentifiedinfo', {
	    url: '/accessidentifiedinfo',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/access-identified-info.html',
	        controller : 'accessidentifiedCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.reviewinfo', {
	    url: '/reviewinfo',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/review-information.html',
	        controller : 'reviewinfoCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.analyzeissued', {
	    url: '/analyzeissued',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/analyze-issued.html'
	      }
	    }
	  })
	.state('app.feedbackreport', {
	    url: '/feedbackreport',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/feedback-report.html'
	      }
	    }
	  })
	.state('app.previewfeedbackreport', {
	    url: '/previewfeedbackreport',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/preview-feedback-report.html'
	      }
	    }
	  })
	.state('app.feedbacksupport', {
	    url: '/feedbacksupport',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/feedback-support.html'
	      }
	    }
	  })
	.state('app.sendreport', {
	    url: '/sendreport',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/send-report.html'
	      }
	    }
	  })
	.state('app.reportstamped', {
	    url: '/reportstamped',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/report-stamped.html'
	      }
	    }
	  })
	.state('app.acknowledgeissue', {
	    url: '/acknowledgeissue',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/acknowledge-issue.html'
	      }
	    }
	  })
	.state('app.governmentagree', {
	    url: '/governmentagree',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/government-agree.html'
	      }
	    }
	  })
	.state('app.shareagreedsolution', {
	    url: '/shareagreedsolution',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/share-agreed-solution.html'
	      }
	    }
	  })
	.state('app.followup', {
	    url: '/followup',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/follow-up.html'
	      }
	    }
	  })
	.state('app.witnessimplementation', {
	    url: '/witnessimplementation',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/witness-implementation.html'
	      }
	    }
	  })
	.state('app.changestory', {
	    url: '/changestory',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/change-story.html'
	      }
	    }
	  })
	.state('app.invitefriends', {
	    url: '/invitefriends',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/invite-friends.html',
	        controller : 'collaboratorCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.collaborations', {
	    url: '/collaborations',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/collaborations.html',
	        controller : 'collaboratorlistCtrl'
	      }
	    }
	  })
	.state('app.chat', {
	    url: '/chat',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/chat.html',
	        controller : 'chatMenuCtrl',
	        cache	   : false
	      }
	    }
	  })
	.state('app.viewchat', {
	    url: '/viewchat/:sender_id/:receiver_id',
	    views: {
	      'menuContent': {
	        templateUrl: 'templates/view-chat.html',
	        controller : 'chatCtrl',
	        cache	   : false
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