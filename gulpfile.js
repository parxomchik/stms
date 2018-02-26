const gulp = require('gulp');
const path = require('path');
const runSequence = require('run-sequence').use(gulp);

const generator = {
    component: {
        template: path.join(__dirname, 'tasks', 'generator', 'component/**/*.**'),
        name: 'component'
    }
};

gulp.task('component', require('./tasks/generator')(gulp, generator.component));
