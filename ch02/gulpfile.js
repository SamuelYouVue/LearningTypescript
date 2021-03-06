var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");
const GulpUglify = require("gulp-uglify");

var paths = {
    pages: ["src/*.html"],
};
gulp.task("copy-html", function () {
    return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});
gulp.task(
    "default",
    gulp.series(gulp.parallel("copy-html"), function () {
        return browserify({
            basedir: ".",
            debug: true,
            entries: ["src/ts/main.ts"],
            cache: {},
            packageCache: {},
        })
            .plugin(tsify)
            .transform("babelify", {
                presets: ["@babel/preset-env"],
                extensions: [".ts"],
            })
            .bundle()
            .pipe(source("bundle.js"))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(GulpUglify())
            .pipe(sourcemaps.write("./"))
            .pipe(gulp.dest("dist"));
    })
);