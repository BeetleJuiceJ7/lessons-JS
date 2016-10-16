var gulp = require('gulp');
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	notify = require('gulp-notify');

gulp.task('default', function () {
   gulp.src('css/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(rename('bundle-min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/css'))
    .pipe(notify('Done!'));
});

gulp.task('watch', function () {
	gulp.watch('css/*.css', ['default'])
})