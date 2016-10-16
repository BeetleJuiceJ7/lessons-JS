var gulp = require('gulp');
	concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify');

gulp.task('default', function () {
   gulp.src('css/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(minifyCSS())
    .pipe(rename('bundle.min.css'))
    .pipe(autoprefixer('last 15 versions'))
    .pipe(notify('Done!'))
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function(){
    gulp.watch('css/*.css', ['default'])
})