
//为Select添加事件，当选择其中一项时触发
$(function () {
    $('#link1').change(function(){
        var myLink = $(this).children('option:selected').val();//这就是selected的值)
        //window.open(myLink)
        window.location.href = myLink
    })
});
//选项卡
$(function () {

    $("#tabfir li").click(function () {

       var _index = $(this).index();

       $(this).addClass("select").siblings().removeClass("select");
       $("#content > div").each(function (index, item) {
           index === _index ? $(item).addClass("select") : $(item).removeClass("select");
       });
   })
});

