var gulp = require('gulp');
var stylus = require('gulp-stylus');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

gulp.task('css', function () {
gulp.src('./styles/**/*.styl')
  .pipe(stylus({compress: true}))
  .pipe(gulp.dest('./css'));
  .pipe(connect.reload());
});

gulp.task('images', function() {
  gulp.src('./static/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('./dist/static'));
});

gulp.task('watch', function() {
  gulp.watch('./styles/**/*.styl', ['css']),
  gulp.watch('./**/*.html, ['compress'])
});
