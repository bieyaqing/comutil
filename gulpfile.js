'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat-multi');
var inject = require('gulp-inject');
var removeHtmlComments = require('gulp-remove-html-comments');
var webserver = require('gulp-webserver');

let SRC = "./src";
let DESC = "./app";

gulp.task('default', function() {
	console.log("default");
});

gulp.task('build-lib', function() {
	console.log("build-lib");
	return gulp.src([
		'./node_modules/**/jquery.min.js',
		'./node_modules/**/bootstrap.min.css',
		'./node_modules/**/bootstrap.min.js',
		'./node_modules/**/angular.min.js',
		'./node_modules/**/angular-route.min.js',
	])
	.pipe(gulp.dest(DESC+'/lib'));
});

gulp.task('build-sass', function() {
	console.log("build-sass");
	return gulp.src(SRC+'/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(DESC+'/css'));
});

gulp.task('build-css', ['build-sass'], function() {
	console.log("build-css");
});

gulp.task('build-js', function() {
	console.log("build-js");
	return concat({
		'app.js': [SRC+'/js/function.js', SRC+'/js/app.js', SRC+'/js/ctrl.root.js']
	})
	.pipe(gulp.dest(DESC+'/js'));
});

gulp.task('build-html', function() {
	console.log("build-html");
	return gulp.src(SRC+'/**/*.html')
	.pipe(gulp.dest(DESC));
});

gulp.task('build', ['build-lib', 'build-css', 'build-js', 'build-html'], function() {
	console.log("build");
	var target = gulp.src(DESC+'/index.html'); 
	var sources = gulp.src([
		DESC+'/**/bootstrap.min.css',
		DESC+'/**/*.css',
		DESC+'/**/jquery.min.js',
		DESC+'/**/bootstrap.min.js',
		DESC+'/**/angular.min.js',
		DESC+'/**/angular-route.min.js',
		DESC+'/**/*.js'
	], {read: false});

	return target.pipe(inject(sources))
	.pipe(removeHtmlComments())
	.pipe(gulp.dest(DESC));
});

gulp.task('serve', ['build'], function() {
	return gulp.src('')
	.pipe(webserver({
		livereload: true,
		directoryListing: true,
		open: true,
		host: 'localhost',
		port: 8000,
		open: '/app/index.html',
		fallback: 'index.html'
	}));
});