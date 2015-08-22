/* 
    app.js - crowdlines
    contains the main angularjs logic

    Aziz | 18 Aug 2015
 */


//////////////////////////////////////////////////
// Modules
//////////////////////////////////////////////////

// angular modules are basically mini applications 
var app = angular.module( "crowdlines", [] );



//////////////////////////////////////////////////
// Controllers
//////////////////////////////////////////////////

// definition of the 'mainCtrl' controller, which is referenced within index.html
app.controller
( 
    "mainCtrl", 
    function( $scope )
    {
        $scope.posts =
        [
            { title: "post 1", upvotes: 5 },
            { title: "post 2", upvotes: 2 },
            { title: "post 3", upvotes: 15 },
            { title: "post 4", upvotes: 9 },
            { title: "post 5", upvotes: 4 }
        ];
        
        
        // everytime 'addPost' is accessed, it will invoke the anonymous function
        // that will cause a new post to be appended to the array
        $scope.addPost = function()
        {   
            // prevent an empty post title from being submitted,
            // please note 'link' on the other hand is NOT compulsary
            if( !$scope.title || $scope.title === "" )
            {
                return;
            }
            
            // this simple adds a new post with hardcoded values
            // $scope.posts.push( { title: 'A new post!', upvotes: 0 } );
            
            // $scope.title, $scope.link allow the form bounded values to be accessed here
            $scope.posts.push
            ( 
                { 
                    title: $scope.title, 
                    link: $scope.link, 
                    upvotes: 0 
                } 
            );
            
            // and this will allow the bound title input to be cleared at this point
            // please note that we have already captured the title above
            $scope.title = "";
            $scope.link = "";
        };
        
        
        // defines the functionality to allow incrementing the upvotes,
        // everytime the 'up arrow' is clicked
        // please note however that instead of 
        // 1. passing back the index number and 
        // 2. traversing the entire array and
        // 3. then finally updating the count
        // we are retrieving a reference directly to the post to be updated
        $scope.upTheVotes = function( post )
        {
            post.upvotes += 1;
        };
        
    } 
);


/*
app.controller
( 
    "mainCtrl",
    [
        "$scope",
        
        // the $scope variable acts like a bridge between the view and the controller
        // anything that should be accessible to the view should be binded to the $scope
        function( $scope )
        {
            $scope.test = "salam dunya";
            $scope.posts =
            [
                { title: "post 1", upvotes: 5 },
                { title: "post 2", upvotes: 2 },
                { title: "post 3", upvotes: 15 },
                { title: "post 4", upvotes: 9 },
                { title: "post 5", upvotes: 4 }
            ];
        }
    ]
);*/



//////////////////////////////////////////////////
// Filters
//////////////////////////////////////////////////

app.filter
( 
    "capitalise", 
    function()
    {
        return function( text )
        {
            return text.toUpperCase();
        };
    } 
);

