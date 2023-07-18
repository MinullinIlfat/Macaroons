'use strict';

var gulp = require('gulp');
var less = require('gulp-less');// подключаем gulp-less


const src_path = './src/styles/*.less';

gulp.task('less', function(){

    return gulp.src(src_path)
        .pipe(less({}))
        .pipe(gulp.dest('./dist'))
});


gulp.task('watch', function(){
    return gulp.watch(src_path, gulp.series('less'));
});
//*/

gulp.task('default', gulp.series('less', 'watch'));
