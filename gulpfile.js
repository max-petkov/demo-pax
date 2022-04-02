const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const purgecss = require("gulp-purgecss");
const concatCss = require("gulp-concat-css");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const mergeStream = require("merge-stream");
const streamqueue = require("streamqueue");
const browsersync = require("browser-sync").create();

const html = {
  src: "src/*.html",
  dist: "dist/",
};
gulp.task("html", function () {
  return gulp.src(html.src).pipe(gulp.dest(html.dist));
});

const css = {
  src: "src/assets/scss/main.scss",
  watch: "src/assets/scss/**/*",
  dist: "dist/assets/css/",
};

gulp.task("css", function () {
  return gulp
    .src(css.src)
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest(css.dist));
});

const js = {
  src: "src/assets/js/main.js",
  dist: "dist/assets/js",
};
gulp.task("js", function () {
  return gulp.src(js.src).pipe(uglify()).pipe(gulp.dest(js.dist));
});

const svg = {
  src: "src/assets/svg/*.svg",
  dist: "dist/assets/svg",
};
gulp.task("svg", function () {
  return gulp.src(svg.src).pipe(gulp.dest(svg.dist));
});

gulp.task("build", gulp.series("html", "css", "js", "svg"));

gulp.task("watch", function () {
  browsersync.init({ server: { baseDir: "./dist" } });
  gulp.watch(html.src, gulp.series("html")).on("change", browsersync.reload);
  gulp.watch(css.watch, gulp.series("css")).on("change", browsersync.reload);
  gulp.watch(js.src, gulp.series("js")).on("change", browsersync.reload);
});

gulp.task("default", gulp.series("build", "watch"));
