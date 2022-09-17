var sass = require('gulp-sass')(require('sass'));
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify-es';
import browserSync from 'browser-sync';

const server = browserSync.create();

// define import and export paths
const paths = {
	styles: {
		src: ['assets/dev/scss/**/*.scss'],
		dest: 'assets/dist/css',
	},
	scripts: {
		src: 'assets/dev/js/**/*.js',
		dest: 'assets/dist/js',
	},
};

// handle styles
export const styles = () => {
	return gulp
		.src(paths.styles.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(paths.styles.dest));
};

export const scripts = () => {
	return gulp.src(paths.scripts.src).pipe(uglify()).pipe(gulp.dest(paths.scripts.dest));
};

export const serve = done => {
	server.init({
		proxy: 'http://localhost',
		browser: 'google chrome',
	});
	done();
};

export const reload = done => {
	server.reload();
	done();
};

export const watch = () => {
	gulp.watch(paths.styles.src, gulp.series(styles, reload));
	gulp.watch(paths.scripts.src, gulp.series(scripts, reload));
	gulp.watch(['**/*.php **/*.css **/*.js'], gulp.series(reload));
};

export default gulp.series(watch, reload);
