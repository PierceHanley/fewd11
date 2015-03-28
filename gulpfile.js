var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('default', function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(['week5/**/*.html', 'week5/**/*.css', 'week5/**/*.js', 'week5/**/*.md'], {cwd: '.'}, reload);
});
