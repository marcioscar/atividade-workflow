
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('compila', function() {
    gulp.src('./source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./source/scss/**/*.scss',['compila']);
});

