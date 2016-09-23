module.exports = function(config) {
  config.set({
    basePath : "",
    frameworks : ['jasmine'],
    files : [
      {pattern : 'bower_components/**/*.js', included: false},
      {pattern : 'src/**/*.js', included: true},
      {pattern : 'test/*.js', included: true},
      {pattern : 'test/**/*Spec.js', included: true}
    ],
    exclude : [],
    reporters : ['progress'],
    port : 9876,
    colors : true,
    logLevel : config.LOG_INFO,
    autoWatch : true,
    browsers : ['Chrome_without_security'],
    customLaunchers: {
      Chrome_without_security : {
        base : 'Chrome',
        flags : ['--disable-web-security']
      }
    },
    captureTimeout : 60000,
    singleRun : false
  });
} 
