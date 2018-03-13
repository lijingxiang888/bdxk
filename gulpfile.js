var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

gulp.task('server',function () {
   connect.server({
       //root:'bdxk', //注意：如果只放在根目录test，这可以不用写
       port:8080, //默认8080
       livereload:true //启动实时刷新功能
   })
});
gulp.task('watch',function () {
    livereload.listen();
    gulp.watch('**/*.*',function (file) {
        livereload.changed(file.path);
    })
    // gulp.watch('**/*.css*',function (file) {
    //     livereload.changed(file.path);
    // });
});
gulp.task('default',['server','watch']);
