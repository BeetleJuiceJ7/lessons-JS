var gulp = require('gulp');
	concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    notify = require('gulp-notify');

gulp.task('default', function () {
   gulp.src('css/*.css')
    .pipe(concatCss('css/bundle.css'))
    .pipe(minifyCSS())
    .pipe(rename('css/bundle.min.css'))
    .pipe(notify('Done!'))
    .pipe(gulp.dest('app/'));
});