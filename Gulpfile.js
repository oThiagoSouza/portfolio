const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

function imageCompress(){
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

function scripts () {
    return gulp.src('./src/script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

exports.default = gulp.parallel(styles, imageCompress, scripts)

exports.watch = ()=> {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/script/*.js', gulp.parallel(scripts))
}