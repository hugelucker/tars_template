'use strict';

/**
 * Styles compilation
 */
module.exports = () => {
    return tars.packages.gulp.task('uncss:compile-css', () => {
        return require(`${tars.root}/user-tasks/css/helpers/${tars.config.css.workflow}-compile-css-task-template`)();
    });
};
