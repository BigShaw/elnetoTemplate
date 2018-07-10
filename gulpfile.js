'use strict';
 
var gulp = require('gulp');
var	jshint = require('gulp-jshint');
var less = require('gulp-less');
var path = require('path');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('./src/admissions/assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
 
// gulp.task('sass', function () {
//   return gulp.src('./src/admissions/assets/css/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./src/admissions/assets/css'));
// });
 


 gulp.task('less', function () {
  return gulp.src('./css/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/admissions/assets/js/*.js', ['lint']);
    gulp.watch('./css/*.less', ['less']);
});


gulp.task('default', ['lint','less', 'watch']);