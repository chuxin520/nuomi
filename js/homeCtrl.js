/**
 * Created by Administrator on 2016/7/15 0015.
 */
var module = {};
myApp.constant("rowSize", 4);
myApp.run(function ($http) {
    $http.get("data/home_data.json").success(function (data) {
        module = data;
        /*获取第二个json数据*/
        /* $http.get("cities.json").success(function(data){
         module=data;
         });*/
    });

});

myApp.controller("homeCtrl", function ($scope, rowSize) {
    $scope.foodData = module.food;
    $scope.foodItems = module.food.items;
    $scope.movieData = module.movie;
    $scope.movieItems = module.movie.items;
    $scope.playData = module.play;
    $scope.playItems = module.play.items;
    $scope.lifeData = module.life;
    $scope.lifeItems = module.life.items;
    $scope.hotelData = module.hotel;
    $scope.hotelItems = module.hotel.items;
    $scope.localData = module.local;
    $scope.localItems = module.local.items;
    $scope.beautyData = module.beauty;
    $scope.beautyItems = module.beauty.items;

    function handleData(oldData){
        for(var i=0;i<oldData.length;i++){
            oldData[i].index=i;
            if(oldData[i].index%rowSize==0){
                oldData[i].rowFirstClass="row-first-item";
            }else if (oldData[i].index%rowSize==3){
                oldData[i].rowFirstClass="row-last-item";
            }else {
                oldData[i].rowFirstClass="";
            }
        }
    }
    handleData($scope.foodItems);
    handleData( $scope.movieItems);
    handleData( $scope.playItems);
    handleData( $scope.lifeItems);
    handleData( $scope.hotelItems);
    handleData( $scope.localItems);
    handleData( $scope.beautyItems);
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

        /*bannner区地区显示*/
        /*这个地方有问题！！！！！！！！！*/
        var showFlag = false;

        $(".arrow-down").on("mouseover", function () {
            console.info("over" + showFlag);
            showFlag = true;
            $(".hoverShow").css({height: "215px", zIndex: "3", borderColor: "#dfdfdf"});
            $(".hoverShow").find("ul").css({height: "175px", zIndex: "3"});
        });

        $(".hoverShow").hover(function(){},function(){

                console.info("out" + showFlag);
                if (showFlag) {
                    $(".hoverShow").css({height: "120px", zIndex: "1", borderColor: "#fff"});
                    $(".hoverShow").find("ul").css({height: "52px"});
                }
                showFlag = false;

        });

        /*问题代码*/
        //$(".hoverShow").on("mouseout", function () {
        //    console.info("out" + showFlag);
        //    if (showFlag) {
        //        $(".hoverShow").css({height: "120px", zIndex: "1", borderColor: "#fff"});
        //        $(".hoverShow").find("ul").css({height: "52px"});
        //    }
        //    showFlag = false;
        //}).find("*").on("mouseout", function () {
        //    console.info("dafdsafd");
        //    return false;
        //});

        /*轮播函数*/
        var num1 = 0, timer1 = null, timer2 = null, flag = 0;
        var $allPic = $(".pics li img");
        var count = 0;
        $(".pics").width(737 * $allPic.length);
        $("#index").width(26 * $allPic.length);
        var timer1=setTimeout(move, 2000);
        //setInterval(move,2000);
        $allPic.each(function () {
            var picBtnIndex = $(this).attr("src").replace("images/", "").replace(".jpg", "").replace(".png", "");
            $("#index").append("<li><a class='picIndex' href='#" + picBtnIndex + "'>" + picBtnIndex + "</a></li>");
            /*$("#index li a").eq(0).addClass("picShow");*/
        });

        /*给图片下标注册事件*/
        /*      $("#index li a").on("click", function () {
         $(".pics").finish();
         clearTimeout(timer1);
         var pressIndex = $(this).text();
         var currentPicIndex = $(".pics li:eq(0) img").attr("src").replace("images/", "").replace(".jpg", "").replace(".png", "");
         while (currentPicIndex != pressIndex) {
         $(".pics").append($(".pics li:eq(0)"));
         currentPicIndex = $(".pics li:eq(0) img").attr("src").replace("images/", "").replace(".jpg", "").replace(".png", "");
         }
         $("#index li a").removeClass("picShow");
         $("#index li a").eq(pressIndex - 1).addClass("picShow");
         clearTimeout(timer2);
         timer2 = setTimeout(function () {
         move();
         }, 2000)
         });*/

        /*给左右按钮注册事件*/
        $("#left").on("click", function () {
            clearTimeout(timer2);
            $(".pics").finish();
            var lastLi = $(".pics li:eq(1)");
            var firstLi = $(".pics li:eq(0)");
            firstLi.before(lastLi);
            clearTimeout(timer1);
            count == 0 ? count = 1 : count--;
            /* $("#index li a").removeClass("picShow");
             $("#index li a").eq(count).addClass("picShow");*/
            timer2 = setTimeout(function () {
                move();
            }, 2000)
        });

        $("#right").on("click", function () {
            clearTimeout(timer2);
            $(".pics").finish();
            clearTimeout(timer1);
            count == 1 ? count = 0 : count++;
            /* $("#index li a").removeClass("picShow");
             $("#index li a").eq(count).addClass("picShow");*/
            $(".pics").append($(".pics li:eq(0)"));
            timer2 = setTimeout(function () {
                move();
            }, 2000)
        });

        /*轮播函数*/
        function move() {
            clearTimeout(timer1);
            count == 8 ? count = 0 : count++;
            $("#index li a").removeClass("picShow");
            $("#index li a").eq(count).addClass("picShow");
            $(".pics").animate({
                left: (-737) + "px"
            }, 400, function () {
                var firstLi = $(".pics li:eq(0)");
                $(".pics").append(firstLi);
                $(".pics").css({left: 0});
            });

            timer1 = setTimeout(move, 2000);
        }

    });
});
