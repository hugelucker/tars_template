'use strict';

const gulp = tars.packages.gulp;
const gutil = tars.packages.gutil;
const chokidar = tars.packages.chokidar;
const watcherLog = tars.helpers.watcherLog;

/**
 * This is an example of watcher
 */
module.exports = function () {
    return chokidar.watch(
        './bower_components/**/*.*',
        Object.assign(tars.options.watch, {
            // Options set bellow will override default from tars.options.watch
            // If you need default options, you can use just tars.options.watch
            ignored: '',
            persistent: true,
            ignoreInitial: true
        })
    ).on('all', function(event, path) {
        watcherLog(event, path);
        // You could start as many tasks as you need
        gulp.start('css:compile-css');
    });
};
