const gulp = require('gulp');
const LoadTasks = require('load-tasks').default;
const path = require('path');

const buildConfig = require('./build/config');

const tasks = new LoadTasks(path.resolve('./build/tasks'))(gulp, buildConfig);

gulp.task('babel', tasks.babel);
gulp.task('copy:src', tasks.copy.src);

gulp.task('copy', ['copy:src']);

gulp.task('default', ['copy', 'babel']);
