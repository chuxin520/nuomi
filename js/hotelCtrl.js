/**
 * Created by Administrator on 2016/7/17 0017.
 */
/**
 * Created by Administrator on 2016/7/15 0015.
 */
var moduleHotel = {};
myApp.constant("rowSizeBrands", 5);
myApp.run(function ($http) {
    $http.get("data/hotel_data.json").success(function (data) {
        moduleHotel = data;
        /*获取第二个json数据*/
        /* $http.get("cities.json").success(function(data){
         module=data;
         });*/
    });

});

myApp.controller("hotelCtrl", function ($scope, rowSizeBrands) {
    $scope.rowSizeBrands=rowSizeBrands;
    $scope.hotelData = moduleHotel.hotel;
    $scope.hotelItems = moduleHotel.hotel.items;
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
    $scope.newHotelItems= $scope.hotelItems;
    handleData($scope.newHotelItems);



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

        $(".subway").hover(function () {
            $(".subway-detail").css({display:"block"});
            $(".hotel-sanjiao").css({display:"block"});
            $(".xingZheng-detail").css({display:"none"});
            $(".xingZheng-sanjiao").css({display:"none"});
        }, function () {});
        $(".xingZheng").hover(function () {
            $(".subway-detail").css({display:"none"});
            $(".hotel-sanjiao").css({display:"none"});
            $(".xingZheng-detail").css({display:"block"});
            $(".xingZheng-sanjiao").css({display:"block"});
        }, function () {});
    });

});
