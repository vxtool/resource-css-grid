module.exports = function(grunt) {
    var path = require('path');

    require('load-grunt-config')(grunt, {
        init: true,
        configPath: path.join(process.cwd(), 'tasks'),
        data: {
            projectDev : 'source/',
        	projectDir : './',
            pkg: grunt.file.readJSON('package.json')
        }
    });

};