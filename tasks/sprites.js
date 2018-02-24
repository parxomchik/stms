module.exports = (gulp, imagesSource, stylesDestination, imagesDestination) => () => {

    const sprity = require('sprity');
    const gulpif = require('gulp-if');

    return sprity.src({
        src: imagesSource + '/**/*.{png,jpg}',
        style: './sprite.less',
        split: true,
        cssPath: './assets/sprites'
    })
        .pipe(gulpif('*.png', gulp.dest(imagesDestination), gulp.dest(stylesDestination)));

};