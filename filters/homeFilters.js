/**
 * Created by hxsd on 2016/6/30.
 */
var homeFilters=angular.module("homeFilters",[]);

homeFilters.filter("checkRowFirst", function () {
    return function (item) {
        if ($index%4==0){
           return item.rowFirstClass;
        }else{
            return ;
        }

    }
});

/*
customFilters.filter("pageNav",function(){
    return function (items, pageSize) {
        if(angular.isArray(items)&&angular.isNumber(pageSize)){
            var navBtns=Math.ceil(items.length/pageSize);
            var navBtnBar=[];
            for (var index=1;index<=navBtns;index++){
                navBtnBar.push(index);
            }
            return navBtnBar;
        }else {
            return items;
        }
    }
});*/
