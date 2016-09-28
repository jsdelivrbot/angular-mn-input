'use strict';

let gulp = require('gulp');

let tasks = [
  'vendorCSS',
  'vendorJS',
  'styles',
  'scripts',
  'templates',
  'browser-sync',
  'watch',
];

gulp.task('default', tasks);
