var gulp = require('gulp');
	concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    notify = require('gulp-notify');


// server connect
    gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});


//css style
gulp.task('css', function () {
   gulp.src('css/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(minifyCSS())
    .pipe(rename('bundle.min.css'))
    .pipe(autoprefixer('last 15 versions'))
   // .pipe(notify('Done!'))
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});

//html
gulp.task('html', function () {
    gulp.src('app/index.html')
    .pipe(connect.reload());
})

//gulp-watch
gulp.task('watch', function () {
    gulp.watch('css/*.css', ['css'])
    gulp.watch('app/index.html', ['html'])
})


//default

gulp.task('default', ['connect', 'html', 'css', 'watch']);