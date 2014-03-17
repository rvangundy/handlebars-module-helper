'use strict';

/******************
 *  Dependencies  *
 ******************/

var gulp = require('gulp');
var git  = require('gulp-git');
var bump = require('gulp-bump');
var map  = require('map-stream');
var args = require('yargs').argv;

/**********
 *  Vars  *
 **********/

var version = null;

/***********
 *  Tasks  *
 ***********/

// Bump
gulp.task('bump', function () {
    return gulp.src(['./package.json'])
        .pipe(bump({type : 'fix' }))
        .pipe(map(function (file, cb) {
            var json = JSON.parse(file.contents.toString());
            version = 'v' + json.version;

            cb(null, file);
        }))
        .pipe(gulp.dest('./'));
});

// Release
gulp.task('release', ['bump'], function () {
    var message = args.message || version;

    return gulp.src('./')
        .pipe(git.commit('Release ' + version))
        .pipe(map(function (file, cb) {
            git.tag(version, message);
            cb(null, file);
        }));
});
