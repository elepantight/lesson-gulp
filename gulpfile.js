const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');


function imgTest(){
    return gulp
    .src('./img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./minified/images'));
}
function watch(){       
    browserSync.init({     
        server: {       
            baseDir: './',     
        }   });

    }

exports.watch = watch
exports.imgTest = imgTest