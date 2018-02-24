'use strict';

module.exports = (gulp, opt) => () => {
    const path = require('path');
    const yargs = require('yargs');
    const template = require('gulp-template');
    const rename = require('gulp-rename');
    const gutil = require("gulp-util");

    const cap = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };

    const getTemplatePath = (name, parrent) => {
        return ['./app', parrent, name + '.partial.html'].join('/');
    };

    // Component name and path
    const name = yargs.argv.name;
    let parentPath = yargs.argv.in;
    if (parentPath && parentPath.charAt(0) === '/') {
        parentPath = parentPath.substr(1);
    }

    if (name === undefined || !name.length) {
        throw new gutil.PluginError({
            plugin: opt.name,
            message: 'Provide ' + opt.name + ' name: --name componentName'
        });
    }
    if (parentPath === undefined || !parentPath.length) {
        throw new gutil.PluginError({
            plugin: 'Component',
            message: 'Provide path for  ' + opt.name + '  relatively to /src/app: --in widgets'
        });
    }

    // Generate path dest
    const destPath = path.join('src/app', parentPath, name);

    return gulp.src(opt.template)
        .pipe(template({
            name: name,
            upCaseName: cap(name),
            templatePath: getTemplatePath(name, parentPath)
        }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
};