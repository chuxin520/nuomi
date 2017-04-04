/**
 * Created by Administrator on 2016/7/18 0018.
 */
/**
 * Created by Administrator on 2016/7/17 0017.
 */
/**
 * Created by Administrator on 2016/7/15 0015.
 */
var moduleMovie = {};
myApp.constant("rowSizeBrands", 4);
myApp.run(function ($http) {
    $http.get("data/movie_data.json").success(function (data) {
        moduleMovie = data;
        /*获取第二个json数据*/
        /* $http.get("cities.json").success(function(data){
         module=data;
         });*/
    });

});

myApp.controller("movieCtrl", function ($scope, rowSizeBrands) {
    $scope.rowSizeBrands=rowSizeBrands;
    $scope.movieData = moduleMovie.movie;
    $scope.movieItems = moduleMovie.movie.items;
    function handleData(oldData){
        for(var i=0;i<oldData.length;i++){
            oldData[i].index=i;
            if(oldData[i].index%rowSizeBrands==0){
                oldData[i].rowFirstClass="row-first-item";
            }else if (oldData[i].index%rowSizeBrands==3){
                oldData[i].rowFirstClass="row-last-item";
            }else {
                oldData[i].rowFirstClass="";
            }
        }
    }

    $scope.newItems= $scope.movieItems;
    /*下拉刷新有问题*/
    /*$(document).on("scroll", function () {
     $scope.top=$(document).scrollTop();
     $scope.hightBody=$(document).height();
     $scope.hightScreen=$(window).height();
     $("#test").html($scope.top+","+$scope.hightBody+","+$scope.hightScreen);
     var  result=$scope.hightBody-$scope.top-$scope.hightScreen;
     if(result<=1100){
     alert($scope.foodItems.length);
     for(var i=0;i<$scope.movieItems.length;i++){
     $scope.foodItems.push($scope.movieItems[i]);
     }
     $scope.newItems= $scope.foodItems;
     alert($scope.foodItems.length);
     }
     });*/

    handleData($scope.newItems);


});
