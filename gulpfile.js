var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('sass', function () {
  gulp.src('./src/css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/css/style.scss', ['sass']);
});


gulp.task('js', function () {
  gulp.watch('./src/css/style.scss', ['sass']);
});

// Fonts
gulp.task('fonts', function () {
  return gulp.src([
    './src/fonts/**/*.{ttf,woff,eot,svg,woff2}'])
    .pipe(gulp.dest('./build/fonts'));
});

gulp.task('scripts', function () {
  return gulp.src(['./src/js/custom.js',
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('default', ['sass', 'fonts', 'scripts']);