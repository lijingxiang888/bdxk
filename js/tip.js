/*检测当前浏览器是否支持 a 标签的download属性*/
var isSupportDownload = 'download' in document.createElement('a');

if ( !isSupportDownload ) { //如果不支持
    var $link = $('a'); //得到页面上所有的a标签

    $link.each(function() { //循环a标签，找到页面上带有download属性的a标签
        var $download = $(this).attr('download');

        if (typeof $download !== typeof undefined && $download !== false) {
            var $el = $('<span>').addClass('download-instruction').text('如需下载请右击并选择"目标另存为"');
            $el.insertAfter($(this)).hide();
            $(this).hover(function () {
                $el.show();
            },function () {
                $el.hide();
            })
        }

    });
}