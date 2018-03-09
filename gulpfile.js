/**
 * Created by Administrator on 2018/3/9 0009.
 */
var gulp = require('gulp'); //引入gulp
var connect = require('gulp-connect'); //插件

gulp.task('server',function () {
   connect.server({
       //root:'bdxk', //注意：如果gulp任务开始于根目录，这可以不用写
       port:8080, //端口，没有此配置项也是默认8080
       livereload:true //启动实时刷新功能
   })
});
gulp.task('html',function () {
    gulp.src('**/*.html*')
        .pipe(connect.reload())
});
gulp.task('css',function () {
    gulp.src('css/**/*.css')
        .pipe(connect.reload())
});
gulp.task('js',function () {
    gulp.src('js/**/*.js')
        .pipe(connect.reload())
});
gulp.task('watch',function () {
    gulp.watch('**/*.html*',['html']);
    gulp.watch('css/**/*.css',['css']);
    gulp.watch('js/**/*.js',['js']);
});
//命令行只执行gulp命令不加任务名，默认会执行default任务，没有配置default任务的话会报错
//配置默认任务，这样命令行只执行gulp，默认执行了default任务。
gulp.task('default',['server','watch']);



// var gulp = require('gulp');
// var connect = require('gulp-connect');
// var livereload = require('gulp-livereload');
//
// gulp.task('server',function () {
//    connect.server({
//        //root:'bdxk', //注意：如果只放在根目录test，这可以不用写
//        port:8080, //默认8080
//        livereload:true //启动实时刷新功能
//    })
// });
// gulp.task('watch',function () {
//     livereload.listen();
//     gulp.watch('**/*.*',function (file) {
//         livereload.changed(file.path);
//     })
//     // gulp.watch('**/*.css*',function (file) {
//     //     livereload.changed(file.path);
//     // });
// });
// gulp.task('default',['server','watch']);