const gulp                                      = require('gulp');
const {src, series, parallel, dest, watch}      = require('gulp');
const imagemin                                  = require('gulp-imagemin')
  


//updates the dist folder with our edited html
function copyHtml(){
    return src('src/*.html').pipe(gulp.dest('dist'));
}

//compresses and optimizes images for quicker page loads
function imgOptimize(){
    return src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}


exports.imgOptimize =   imgOptimize;
exports.copyHtml    =   copyHtml;
exports.default     =   parallel(copyHtml , imgOptimize);
