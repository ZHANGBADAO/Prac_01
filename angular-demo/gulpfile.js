"use strict"
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

var ctrlArr = [
   "src/config/ControllerModule.js",
   "src/controllers/mainController.js",
   "src/controllers/movieController.js"
];

var ctrlDestDir="src/controllers/"
gulp.task("concatCtrls",function(){
    return gulp.src(ctrlArr)
        .pipe(concat("controllers.js"))
        .pipe(gulp.dest(ctrlDestDir))
        .pipe(uglify())
        .pipe(rename("controllers.min.js"))
        .pipe(gulp.dest(ctrlDestDir))

})

gulp.task("default",["concatCtrls"]);

gulp.task("watch",function(){
    gulp.watch(ctrlDestDir+"/**",["concatCtrls"])
})



