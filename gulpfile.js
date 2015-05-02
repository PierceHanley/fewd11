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

  gulp.watch(['week9/**/*.html', 'week9/**/*.css', 'week9/**/*.js', 'week9/**/*.md'], {cwd: '.'}, reload);
});
