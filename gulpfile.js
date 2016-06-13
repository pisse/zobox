var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins({
    rename: {
        'gulp-rev-collector': 'revCollector',
        'gulp-run-sequence' : 'runSequence'
    }
});

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function () {
    gulp.watch(["app/**/*"], ["webpack:build-dev"]);
});


var Html_dist = "www/";
var Assets_dist = "www/assets/";

gulp.task("rev", ['webpack:build'],  function () {
    return gulp.src([Assets_dist + '*.js',  Assets_dist + '/*.css'])
        // append hash
        .pipe($.rev())

        .pipe(gulp.dest( Assets_dist + "dist/"))

        // write manifest
        .pipe($.rev.manifest())

        .pipe(gulp.dest( Assets_dist + "dist/" ));
});

// Production build
gulp.task("build", function () {
    $.runSequence("webpack:build", "build-assets", function(){
         return gulp.src([ Assets_dist + "dist/" +'*.json',
         'src/*.html'])
       /*  .pipe($.revCollector({
            replaceReved: true
         }))*/
         .pipe(gulp.dest( Html_dist ));
    });
});

gulp.task("build-assets", ["build-css", "build-js"]);
gulp.task("build-css", function () {
     return gulp.src([ Assets_dist +'*.css'])
        .pipe($.replace("\/res\/img\/","\.\.\/res\/img\/"))
        .pipe(gulp.dest( Assets_dist ));
});
gulp.task("build-js", function () {
    return gulp.src([ Assets_dist +'*.js'])
        .pipe($.replace("\/res\/img\/","\.\/res\/img\/"))
        .pipe(gulp.dest( Assets_dist ));
});

gulp.task("webpack:build", function (callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    webpack(myConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});


// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function (callback) {
    // run webpack
    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task("webpack-dev-server", function (callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "source-map";
    myConfig.debug = true;

    // Start a webpack-dev-server
    // http://localhost:8080/webpack-dev-server/html/index.html   注意设置了contentBase
    new WebpackDevServer(webpack(myConfig), {
        publicPath: myConfig.output.publicPath,
        contentBase: "src/", //指定html等静态资源的位置， 相对路径
        stats: {
            colors: true
        },
        proxy: {
            '/cgi-bin/*': {
                target: 'http://112.124.66.29:8080',
                changeOrigin: true
            },

        }
    }).listen(8080, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});