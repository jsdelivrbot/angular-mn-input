import gulp from 'gulp'

gulp.task('default', [
  'vendorCSS',
  'vendorJS',
  'styles',
  'scripts',
  'templates',
  'browser-sync',
  'watch',
])
