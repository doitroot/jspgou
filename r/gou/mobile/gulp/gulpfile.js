var gulp = require('gulp');
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem')
var cssUglify = require('gulp-minify-css');


gulp.task('dev',async ()=>{
  gulp.watch('src/*.css',async ()=>{
      var processors = [px2rem({remUnit: 75,remPrecision:3})];
      gulp.src('src/*.css')
        .pipe(postcss(processors))
        .pipe(cssUglify())
        .pipe(gulp.dest('./../css'))
  });
 
})