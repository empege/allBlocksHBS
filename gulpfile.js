/* Da bi radio gulp i da bih pratio tutorijal, skinuo sam verziju 3 (trenutna je 4) i instalirao node verziju 11.15.0 jer gulp 3 ne radi sa novijim verzijama noda... */
// import gulp from 'gulp'; Ovo je isto kao ovo dole, samo es6 i treba module u script valjda
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');

gulp.task('hello', function () {
  console.log('Hello Zell');
});

gulp.task('sassProba', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('proba'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// gulp.task('watch', ['browserSync', 'sassProba'], function () {
//   gulp.watch('src/**/*.scss', ['sassProba']);
//   // Other watchers
//   // Reloads the browser whenever HTML or JS files change
//   gulp.watch('app/*.html', browserSync.reload);
//   gulp.watch('app/js/**/*.js', browserSync.reload);
// })
gulp.task('watch', ['sassProba'], function () {
  gulp.watch('src/**/*.scss', ['sassProba']);
  // Other watchers
})

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'src/templatePage'
    },
  })
})

gulp.task('useref', function () {
  return gulp.src('src/templatePage/*.html')
    .pipe(useref())
    .pipe(gulp.dest(''))
});