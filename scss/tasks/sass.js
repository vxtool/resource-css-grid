module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    options: {
      outputStyle: 'compressed'
    },
    site: {
      files: [{
        expand: true,
        cwd: '<%= projectDev %>',
        src: ['*.scss'],
        dest: '<%= projectDir %>',
        ext: '.css'
      }]
    }
  };
};