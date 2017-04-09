'use strict';

const gulp = tars.packages.gulp;
const gutil = tars.packages.gutil;
const chokidar = tars.packages.chokidar;
const watcherLog = tars.helpers.watcherLog;

/**
 * This is an example of watcher
 */

module.exports = () => {
    return tars.packages.chokidar.watch(
        './bower_components/**/*.{css|scss|js|less|ts}',
        Object.assign(tars.options.watch, {
            // Options set bellow will override default from tars.options.watch
            // If you need default options, you can use just tars.options.watch
            ignored: '',
            persistent: true,
            ignoreInitial: true
        })
    ).on('all', (event, watchedPath) => {
        watcherLog(event, watchedPath);
        // You could start as many tasks as you need
        gulp.start('css:compile-css');
    });
};