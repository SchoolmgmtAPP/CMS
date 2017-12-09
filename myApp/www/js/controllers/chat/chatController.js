angular.module('cmsapp.chatCtrl', ['ionic'])

// All this does is allow the message
// to be sent when you tap return
.directive('input', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      'returnClose': '=',
      'onReturn': '&',
      'onFocus': '&',
      'onBlur': '&'
    },
    link: function(scope, element, attr) {
      element.bind('focus', function(e) {
        if (scope.onFocus) {
          $timeout(function() {
            scope.onFocus();
          });
        }
      });
      element.bind('blur', function(e) {
        if (scope.onBlur) {
          $timeout(function() {
            scope.onBlur();
          });
        }
      });
      element.bind('keydown', function(e) {
        if (e.which == 13) {
          if (scope.returnClose) element[0].blur();
          if (scope.onReturn) {
            $timeout(function() {
              scope.onReturn();
            });
          }
        }
      });
    }
  }
})
.directive('onLongPress', function($timeout) {
  return {
    restrict: 'A',
    link: function($scope, $elm, $attrs) {
      $elm.bind('touchstart', function(evt) {
        // Locally scoped variable that will keep track of the long press
        $scope.longPress = true;

        // We'll set a timeout for 600 ms for a long press
        $timeout(function() {
          if ($scope.longPress) {
            // If the touchend event hasn't fired,
            // apply the function given in on the element's on-long-press attribute
            $scope.$apply(function() {
              $scope.$eval($attrs.onLongPress)
            });
          }
        }, 600);
      });

      $elm.bind('touchend', function(evt) {
        // Prevent the onLongPress event from firing
        $scope.longPress = false;
        // If there is an on-touch-end function attached to this element, apply it
        if ($attrs.onTouchEnd) {
          $scope.$apply(function() {
            $scope.$eval($attrs.onTouchEnd)
          });
        }
      });
    }
  };
})

.controller('chatCtrl', function($scope, $timeout,$stateParams,$ionicPopup, $ionicScrollDelegate,chatservices,$localStorage) {

  $scope.hideTime = true;
  
  $scope.sender = localStorage.getItem('user_id');
  
  if ($scope.sender == $stateParams.sender_id) {
    $scope.receiver = $stateParams.receiver_id
  }else{
    $scope.receiver = $stateParams.sender_id
  }
      var data = {
        sender_id : $stateParams.sender_id,
        receiver_id : $stateParams.receiver_id
      }
      chatservices.view_messages(data).then(function(res){
        console.log(res);
        $scope.chat = res;
      }); 



  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

          $scope.sendMessage = function() {
            alternate = !alternate;

          var d = new Date();
          d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
          t = d.split(":");

          if (typeof $scope.data.message != '' && $scope.data.message != undefined) {

              var chatMessage = {
                  sender_id : $scope.sender,
                  receiver_id : $scope.receiver,
                  message_text : $scope.data.message,
                  is_read : 'N',
                  is_sender_deleted : 'N',
                  is_receiver_deleted : 'N'
              }
              var message=$scope.data.message;
              chatservices.send_message(chatMessage).then(function(res){
                  console.log(res);
                  console.log(message);
                  $scope.last_message_id = res.message_id; 
                 
                    if (res.success =='true') {
                       console.log($scope.last_message_id);
                     console.log($scope.data.message);
                     console.log($scope.sender);
                       //$scope.$apply(function(){
                         $scope.chat.push({
                        message_id:$scope.last_message_id,
                        sender_id: $scope.sender,
                        message_text: message,
                        added_date: t[0]+":"+t[1]
                     // });
                       });
                    }
              });
              // $scope.chat.push({
              //           message_id:33,
              //           sender_id: 64,
              //           message_text: "GSDgsds",
              //           added_date: "12-2-2007"
              //         });
              console.log($scope.last_message_id);              
        }

            

            delete $scope.data.message;
            $ionicScrollDelegate.scrollBottom(true);

          };


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];

    $scope.itemOnLongPress = function(chatD) {
      console.log('Long press');
      $scope.remove = chatD;
      $scope.id=chatD.message_id;
		
       $scope.myPopup = $ionicPopup.show({
        cssClass: 'Choose options',
        scope: $scope,
        template: '<div class="popmessage" >Where do you delete message? </div><br><button ng-click="deletemsg()" class="popup-buttons-picture-type" <b>Delete</b></button>&nbsp;<button ng-click="closePopup()" class="image-popup-cancel" <b>Cancel</b></button> ',
    });
       $scope.closePopup = function(){
      // window.localStorage.setItem("isUploadingImage", "false");


      $scope.myPopup.close();
    };
     $scope.deletemsg= function(){

      var userid=localStorage.getItem('user_id');

      var tmp={'message_id' :$scope.id,'user_id' : userid}
      console.log(tmp);
        chatservices.delete_message(tmp).then(function(response){
             
               console.log(response);
               $scope.myPopup.close();             
              console.log(response);
          
            })
			 var index = $scope.chat.indexOf(chatD);
			  console.log(index);
			  $scope.chat.splice(index, 1);
      $scope.myPopup.close();
      }


      // window.localStorage.setItem("isUploadingImage", "false");
      // $scope.myPopup.close();
    };
    

    $scope.itemOnTouchEnd = function(id) {
      console.log('Touch end');
    }

});