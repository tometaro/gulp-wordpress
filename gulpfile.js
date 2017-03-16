var gulp          = require('gulp');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var plumber       = require('gulp-plumber');
var gutil         = require('gulp-util');
var browserSync   = require('browser-sync').create();
var reload        = browserSync.reload;

var onError = function (err) {
  console.log('An error occurred:', gutil.colors.magenta(err.message));
  gutil.beep();
  this.emit('end');
};

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./'))
  .pipe(plumber({ errorHandler: onError }))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
             baseDir: "./"       //対象ディレクトリ
            ,index  : "index.html"      //インデックスファイル
        }
    });
});

gulp.task('watch', function() {
  browserSync.init({
    files: ['./**/*.php'],
    proxy: 'http://tome.dev',
  });
  gulp.watch('./sass/**/*.scss', ['sass', reload]);
  gulp.watch('./js/*.js', ['js', reload]);
  gulp.watch('images/src/*', ['images', reload]);
  gulp.watch('./**/*.html', ['browser-sync', reload]);
});

gulp.task('default', ['sass', 'watch' ,'browser-sync',]);