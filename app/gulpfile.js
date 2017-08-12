var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var jsFiles = 'scripts/**/*.js';
var angularFiles = 'scripts/angular/**/*.js';
var angularDest = 'scripts/js';
var jsDest = 'public/minified/scripts';

gulp.task('jshint', function() {
    gulp.src('./scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('styles', function() {
    gulp.src('public/styles/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/styles/css'));
});

gulp.task('nodemon', function() {
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    });
});

gulp.task('angularHandler', function() {
    gulp.src(angularFiles)
        .pipe(concat('movieApp.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest(angularDest))
});

gulp.task('scripts', function() {
    gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['jshint', 'styles', 'nodemon', 'angularHandler', 'scripts']);