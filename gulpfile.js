var gulp = require('gulp');
	var = concatCSS = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css');

gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCSS('bundle.css'))
    .pipe(rename('bundle-min.css'))
    .pipe(nminifyCSS(''))
    .pipe(gulp.dest('app/'));
});