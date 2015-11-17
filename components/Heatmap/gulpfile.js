var gulp = require('gulp');
var concat = require('gulp-concat');

var scripts = ['simpleheat.js', 'HeatLayer.js'];

gulp.task('default', function() {
    return gulp.src(scripts)
        .pipe(concat('heatmap.js'))
        .pipe(gulp.dest('build'));
});