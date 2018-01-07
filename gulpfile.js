var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemap = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

gulp.task('serve', ['styles', 'scripts'], function() {

    browserSync.init({
        server: {
            baseDir: "./",
            https: true
        },
        port: 3000
    });

    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('src/js/*.js', ['scripts']);
  	gulp.watch('*.html').on('change', browserSync.reload);
  	gulp.watch('src/scss/**/*.scss').on('change', browserSync.reload);
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
});

gulp.task('styles', function() {
      return gulp.src('src/scss/style.scss')
        .pipe(sourcemap.init())
        .pipe(sass({ style: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemap.write())
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('assets', function(){
    return gulp.src([
            'assets/js/*.js'
        ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('scripts', function() {
  return gulp.src([
        'src/js/*.js'
    ])
    .pipe(concat('script.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('default', ['serve'], function() {

});var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemap = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

gulp.task('serve', ['styles', 'scripts'], function() {

    browserSync.init({
        server: {
            baseDir: "./",
            https: true
        },
        port: 3000
    });

    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('src/js/*.js', ['scripts']);
  	gulp.watch('*.html').on('change', browserSync.reload);
  	gulp.watch('src/scss/**/*.scss').on('change', browserSync.reload);
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
});

gulp.task('styles', function() {
      return gulp.src('src/scss/style.scss')
        .pipe(sourcemap.init())
        .pipe(sass({ style: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemap.write())
        .pipe(gulp.dest('dist/css/'))
});


gulp.task('assets', function(){
    return gulp.src([
            'assets/js/*.js'
        ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('scripts', function() {
  return gulp.src([
        'src/js/*.js'
    ])
    .pipe(concat('script.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('default', ['serve'], function() {

});