module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // Polyfills.
      'node_modules/core-js/client/shim.min.js',

      // System.js for module loading
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',

      // Reflect and Zone.js
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      { pattern: 'karma-test-shim.js', included: true, watched: true },
      { pattern: 'systemjs.config.js', included: false, watched: false },

      // paths loaded via module imports
      // Angular itself
      { pattern: 'node_modules/@angular/!(compiler-cli|tsc-wrapped)/**/*.js', included: false, watched: true },
      { pattern: 'node_modules/@angular/!(compiler-cli|tsc-wrapped)/**/*.js.map', included: false, watched: true },

      //application code
      { pattern: 'src/**/*.js', included: false, watched: true },
      { pattern: 'src/**/*.html', included: false, watched: true },
      { pattern: 'src/**/*.css', included: false, watched: true },
      { pattern: 'src/**/*.ts', included: false, watched: false },
      { pattern: 'src/**/*.js.map', included: false, watched: false },

      //demo code
      { pattern: 'demo/**/*.js', included: false, watched: true },
      { pattern: 'demo/**/*.html', included: false, watched: true },
      { pattern: 'demo/**/*.css', included: false, watched: true },
      { pattern: 'demo/**/*.ts', included: false, watched: false },
      { pattern: 'demo/**/*.js.map', included: false, watched: false },

      //path to the tests
      { pattern: 'test/**/*.js', included: false, watched: true },
      { pattern: 'test/**/*.ts', included: false, watched: true },
      { pattern: 'test/**/*.js.map', included: false, watched: true }
    ],

    // proxied base paths make sure the template and css urls get redirected to /base/...
    proxies: {
      "/src/": "/base/src/",
      "/demo/": "/base/demo/"
    },

    reporters: ['verbose'],
    port: 9877,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
