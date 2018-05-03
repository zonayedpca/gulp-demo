const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('hello', function() {
  console.log('Hi! This is my First Task!!');
});

gulp.task('copy', function() {
   gulp.src('./src/*.html').pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function() {
  gulp.src('./src/css/*.scss')
    .pipe(sass())
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('compress', function() {
  gulp.src('./src/js/*')
    .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('concat', function() {
  gulp.src('./src/js/*')
    .pipe(concat('main.js'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('concatmin', function() {
  gulp.src('./src/js/*')
    .pipe(uglify())
      .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function() {
  gulp.watch('./src/*.html', ['copy']);
  gulp.watch('./src/css/*.scss', ['sass']);
  gulp.watch('./src/js/*', ['concatmin']);
});

gulp.task('default', ['copy', 'sass', 'concatmin', 'watch']);
