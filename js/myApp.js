/**
 * Created by Administrator on 2016/7/15 0015.
 */
var myApp=angular.module("myApp",["ngRoute","ngAnimate","homeFilters"]);
myApp.config(function ($routeProvider) {
    $routeProvider.when("/home",{
        templateUrl:"views/home.html"
    });
    $routeProvider.when("/brands",{
        templateUrl:"views/brands.html"
    });
    $routeProvider.when("/hotel",{
        templateUrl:"views/hotel.html"
    });
    $routeProvider.when("/movie",{
        templateUrl:"views/movie.html"
    });
    $routeProvider.otherwise({templateUrl:"views/home.html"});
});