/* 
    app.js - crowdlines
    contains the main angularjs logic

    Aziz | 18 Aug 2015
 */

// angular modules are basically mini applications 
var app = angular.module( 'crowdlines', [] );

// definition of the 'MainCtrl' controller, which is referenced within index.html
app.controller
( 
    'MainCtrl',
    [
        '$scope',
        
        // the $scope variable acts like a bridge between the view and the controller
        // anything that should be accessible to the view can be binded to the $scope
        function( $scope )
        {
            $scope.test = 'Hello World';
        }
    ]
);

