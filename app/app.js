var app = angular.module("Demo", ["ngRoute"])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
        
            .when("/home",{
                templateUrl: "partials/home.html",
                controller: "homeController"
            })
            .when("/courses",{
                templateUrl: "partials/courses.html",
                controller: "coursesController"
            })
            .when("/students",{
                templateUrl: "partials/students.html",
                controller: "studentsController"
            })
            .otherwise({
                redirectTo:"/home"
            })
        $locationProvider.html5Mode(true);
    })
    .controller("homeController", function($scope, ){
        $scope.message = "Home Page";
    })
    .controller("coursesController", function($scope, ){
        $scope.courses = ["C#","HTML","CSS","PHP","Web design","SQL server","ASP.net"];
        
    })
    .controller("studentsController", function($scope, $http){
        $http.get("ajax/allStudent.php")
            .then(function(response){
            $scope.students = response.data.records;
            
        })
    })
        