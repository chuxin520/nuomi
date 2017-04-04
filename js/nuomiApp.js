/**
 * Created by Administrator on 2016/7/19 0019.
 */
$(function () {
    $(window).scroll(function () {
        headerShow();
        f2Show();
        f3Show();
        f4Show();
        f5Show();
        f6Show();
    });
});
function headerShow() {
    var myTop = $(window).scrollTop();
    if (myTop > 0) {
        $(".header-fixed").addClass("show");
    } else {
        $(".header-fixed").removeClass("show");
    }
}
function f2Show() {
    var myTop = $(window).scrollTop();
    $("#test").html("myTop:"+myTop);
    if (myTop > 100) {
        $(".content-f2 .phone-wrap .phone").css({opacity:1,right:"195px",transition:"all 1s"});
        $(".content-f2 .text .text-box").css({opacity:1,left:"103px",transition:"all 1s"});
    }
}
function f3Show() {
    var myTop = $(window).scrollTop();
    $("#test").html("myTop:"+myTop);
    if (myTop > 500) {
        $(".content-f3 .text-box").css({opacity:1,right:"122px",transition:"all 1s"});
        $(".content-f3 .phone-wrap").css({opacity:1,left:"260px",transition:"all 1s"});
        $(".content-f3 .phone-wrap .gift").css({opacity:1,left:"-213px",transition:"all 0.4s 1s"});
        $(".content-f3 .phone-wrap .phone-s").css({opacity:1,transition:"all 0.4s 1.4s"});
        $(".content-f3 .phone-wrap .phone-item").css({opacity:1,left:"84px",transition:"all 0.4s 1.4s"});
    }
}
function f4Show() {
    var myTop = $(window).scrollTop();
    $("#test").html("myTop:"+myTop);
    if (myTop > 1400) {
        $(".content-f4 .text ").css({opacity:1,left:"41px",transition:"all 1s"});
        $(".content-f4 .page-wrap").css({opacity:1,left:"504px",transition:"all 1s"});
        $(".content-f4 .page-wrap .page-1").css({opacity:1});
        $(".content-f4 .page-wrap .page-2").css({opacity:1,left:"-111px",transition:"all 0.5s 1s"});
        $(".content-f4 .page-wrap .page-3").css({opacity:1,right:"-111px",transition:"all 0.5s 1s"});
/*
        $(".content-f4 .page-wrap .page-1 .voice-wave img").css({display:"block",width:"150px",height:"150px",transition:"all 0.5s 1s"});
*/
        $(".content-f4 .page-wrap .page-4").css({opacity:1,left:"-160px",transition:"all 0.5s 1.5s"});
        $(".content-f4 .page-wrap .page-5").css({opacity:1,right:"-160px",transition:"all 0.5s 1.5s"});
    }
}
function f5Show() {
    var myTop = $(window).scrollTop();
    $("#test").html("myTop:"+myTop);
    if (myTop > 2000) {
        $(".content-f5 .left-items .item-12").css({opacity:1,top:"0px",transition:"all 0.4s"});
        $(".content-f5 .left-items .item-13").css({opacity:1,top:"0px",transition:"all 0.4s 0.1s"});
        $(".content-f5 .right-items .item-14").css({opacity:1,top:"0px",transition:"all 0.4s 0.2s"});
        $(".content-f5 .right-items .item-15").css({opacity:1,top:"0px",transition:"all 0.4s 0.3s"});
        $(".content-f5 .left-items .item-22").css({opacity:1,bottom:"0px",transition:"all 0.4s 0.7s"});
        $(".content-f5 .left-items .item-23").css({opacity:1,bottom:"0px",transition:"all 0.4s 0.8s"});
        $(".content-f5 .right-items .item-24").css({opacity:1,bottom:"0px",transition:"all 0.4s 0.9s"});
        $(".content-f5 .right-items .item-25").css({opacity:1,bottom:"0px",transition:"all 0.4s 1s"});
    }
}
function f6Show() {
    var myTop = $(window).scrollTop();
    $("#test").html("myTop:"+myTop);
    if (myTop > 2800) {
        $(".content-f6 .page-wrap .page-3 ").css({opacity:1,top:"190px",transition:"all 0.8s"});
        $(".content-f6 .page-wrap .page-2 ").css({opacity:1,top:"90px",transition:"all 0.8s 0.8s"});
        $(".content-f6 .page-wrap .page-1 ").css({opacity:1,top:"0px",transition:"all 0.8s 1.6s"});
    }
}
