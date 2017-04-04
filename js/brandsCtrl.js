/**
 * Created by Administrator on 2016/7/17 0017.
 */
/**
 * Created by Administrator on 2016/7/15 0015.
 */
var module = {};
myApp.constant("rowSizeBrands", 5);
myApp.run(function ($http) {
    $http.get("data/home_data.json").success(function (data) {
        module = data;
        /*获取第二个json数据*/
        /* $http.get("cities.json").success(function(data){
         module=data;
         });*/
    });

});

myApp.controller("brandsCtrl", function ($scope, rowSizeBrands) {
    $scope.rowSizeBrands=rowSizeBrands;
    $scope.foodData = module.food;
    $scope.foodItems = module.food.items;
    $scope.movieData = module.movie;
    $scope.movieItems = module.movie.items;
    function handleData(oldData){
        for(var i=0;i<oldData.length;i++){
            oldData[i].index=i;
            if(oldData[i].index%rowSizeBrands==0){
                oldData[i].rowFirstClass="row-first-item";
            }else if (oldData[i].index%rowSizeBrands==4){
                oldData[i].rowFirstClass="row-last-item";
            }else {
                oldData[i].rowFirstClass="";
            }
        }
    }

    $scope.newItems= $scope.foodItems;
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

    //handleData($scope.newItems);
    ///*定义函数不能正常识别*/
    //$scope.showTime=function (){
    //    var time_start = new Date().getTime(); //设定当前时间
    //    var time_end =  new Date("2016/10/01 21:00:00").getTime(); //设定目标时间
    //    // 计算时间差
    //    var time_distance = time_end - time_start;
    //    // 天
    //    /* var int_day = Math.floor(time_distance/86400000);
    //     time_distance -= int_day * 86400000;*/
    //    // 时
    //    var int_hour = Math.floor(time_distance/3600000);
    //    time_distance -= int_hour * 3600000;
    //    // 分
    //    var int_minute = Math.floor(time_distance/60000);
    //    time_distance -= int_minute * 60000;
    //    // 秒
    //    var int_second = Math.floor(time_distance/1000);
    //    // 时分秒为单数时、前面加零
    //    /* if(int_day < 10){
    //     int_day = "0" + int_day;
    //     }*/
    //    if(int_hour < 10){
    //        int_hour = "0" + int_hour;
    //    }
    //    if(int_minute < 10){
    //        int_minute = "0" + int_minute;
    //    }
    //    if(int_second < 10){
    //        int_second = "0" + int_second;
    //    }
    //    // 显示时间
    //    /*$("#time_d").val(int_day);*/
    //    $("#time_h").html(int_hour);
    //    $("#time_m").html(int_minute);
    //    $("#time_s").html(int_second);
    //    // 设置定时器
    //    setTimeout("showTime()",1000);
    //};
    //$scope.showTime();

    $(function () {
        /*bottom 热门*/
        $(".b-t-hotMall").on("mouseover", function () {
            $(".b-hotMall").css({display:"block"});
            $(".b-hotCity").css({display:"none"});
            $(".b-hotShop").css({display:"none"});
            $(".b-t-hotMall").css({backgroundColor:"#f5f5f5",color:"black",borderBottom: "1px #f5f5f5 solid"});
            $(".b-t-hotCity").css({backgroundColor:"",color:"",borderBottom:""});
            $(".b-t-hotShop").css({backgroundColor:"",color:"",borderBottom:""});
        });
        $(".b-t-hotCity").on("mouseover", function () {
            $(".b-hotMall").css({display:"none"});
            $(".b-hotCity").css({display:"block"});
            $(".b-hotShop").css({display:"none"});
            $(".b-t-hotMall").css({backgroundColor:"",color:"",borderBottom:""});
            $(".b-t-hotCity").css({backgroundColor:"#f5f5f5",color:"black",borderBottom: "1px #f5f5f5 solid"});
            $(".b-t-hotShop").css({backgroundColor:"",color:"",borderBottom:""});
        });
        $(".b-t-hotShop").on("mouseover", function () {
            $(".b-hotMall").css({display:"none"});
            $(".b-hotCity").css({display:"none"});
            $(".b-hotShop").css({display:"block"});
            $(".b-t-hotMall").css({backgroundColor:"",color:"",borderBottom:""});
            $(".b-t-hotCity").css({backgroundColor:"",color:"",borderBottom:""});
            $(".b-t-hotShop").css({backgroundColor:"#f5f5f5",color:"black",borderBottom: "1px #f5f5f5 solid"});
        });

        setInterval(function(){
            var mydate=new Date();//获取当前时间
            var myhours=mydate.getHours();
            var time_start = mydate.getTime(); //设定当前时间
            var time_end1 =  new Date("3016/10/01 21:00:00").getTime(); //设定目标时间
            var time_end2 =  new Date("3016/10/01 14:00:00").getTime(); //设定目标时间
            // 计算时间差
            if (myhours>14&&myhours<21){
                var time_distance = time_end1 - time_start;
            }else{
                var time_distance = time_end2 - time_start;
            }
            // 天
            var int_day = Math.floor(time_distance/86400000);
            time_distance -= int_day * 86400000;
            // 时
            var int_hour = Math.floor(time_distance/3600000);
            time_distance -= int_hour * 3600000;
            // 分
            var int_minute = Math.floor(time_distance/60000);
            time_distance -= int_minute * 60000;
            // 秒
            var int_second = Math.floor(time_distance/1000);
            // 时分秒为单数时、前面加零
            if(int_day < 10){
                int_day = "0" + int_day;
            }
            if(int_hour < 10){
                int_hour = "0" + int_hour;
            }
            if(int_minute < 10){
                int_minute = "0" + int_minute;
            }
            if(int_second < 10){
                int_second = "0" + int_second;
            }
            // 显示时间
            $("#time_d").val(int_day);
            console.info(int_hour);
            $("#time_h").html(int_hour);
            $("#time_m").html(int_minute);
            $("#time_s").html(int_second);

        },1000);





    });

});
