var gulp       = require('gulp'),
    jshint     = require('gulp-jshint'),
    changed    = require('gulp-changed'),
    imagemin   = require('gulp-imagemin'),
    concat     = require('gulp-concat'),
    minifyCSS  = require('gulp-minify-css'),
    autoprefix = require('gulp-autoprefixer');

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './dev/img/**/*',
      imgDst = './app/img';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  var cssSrc = "./dev/css/",
      cssDst = "./app/css";

  gulp.src(cssSrc)
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(cssDst));
});
// Default gulp task to run
gulp.task('default', ['imagenmin', 'styles']);
