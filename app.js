/* 
    app.js - crowdlines
    contains the main angularjs logic

    Aziz | 18 Aug 2015
 */


//////////////////////////////////////////////////
// Modules
//////////////////////////////////////////////////

// angular modules are basically mini applications 
var app = angular.module( 'crowdlines', [] );



//////////////////////////////////////////////////
// Controllers
//////////////////////////////////////////////////

app.controller
( 
    'mainCtrl', 
    function( $scope )
    {
        $scope.test = "salam dunya";
        $scope.posts =
        [
            { title: 'post 1', upvotes: 5 },
            { title: 'post 2', upvotes: 2 },
            { title: 'post 3', upvotes: 15 },
            { title: 'post 4', upvotes: 9 },
            { title: 'post 5', upvotes: 4 }
        ];
        
        // everytime 'addPost' is accessed, it will invoke the anonymous function
        // that will cause a new post to be appended to the array
        $scope.addPost = function()
        {
            $scope.posts.push( { title: 'A new post!', upvotes: 0 } );
        };
    } 
);


/*// definition of the 'mainCtrl' controller, which is referenced within index.html
app.controller
( 
    'mainCtrl',
    [
        '$scope',
        
        // the $scope variable acts like a bridge between the view and the controller
        // anything that should be accessible to the view should be binded to the $scope
        function( $scope )
        {
            $scope.test = "salam dunya";
            $scope.posts =
            [
                { title: 'post 1', upvotes: 5 },
                { title: 'post 2', upvotes: 2 },
                { title: 'post 3', upvotes: 15 },
                { title: 'post 4', upvotes: 9 },
                { title: 'post 5', upvotes: 4 }
            ];
        }
    ]
);*/



//////////////////////////////////////////////////
// Filters
//////////////////////////////////////////////////

app.filter
( 
    'capitalise', 
    function()
    {
        return function( text )
        {
            return text.toUpperCase();
        };
    } 
);

