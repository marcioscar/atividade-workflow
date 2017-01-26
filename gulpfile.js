
var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var htmlmin = require("gulp-htmlmin");
 
gulp.task('compila-css', function() {
    gulp.src('./source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compila-html', function() {
    gulp.src('./source/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./source/scss/**/*.scss',['compila-css']);
    gulp.watch('./source/*.html',['compila-html']);
});

