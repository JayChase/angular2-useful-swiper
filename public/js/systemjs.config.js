(function (global) {
  var config = {
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      'demo': 'demo', // 'dist',

      'angular2-useful-swiper': 'src',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // angular testing umd bundles
      '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
      '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
      '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
      '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
      '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
      '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
      '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',
      '@angular/forms/testing': 'npm:@angular/forms/bundles/forms-testing.umd.js',

      'rxjs': 'node_modules/rxjs',

      '@angular2-material': 'node_modules/@angular2-material'
    },
    packages: {
      'demo': { main: 'main.js', defaultExtension: 'js' },
      'angular2-useful-swiper': { defaultExtension: 'js' },
      'rxjs': { defaultExtension: 'js' },
      '@angular2-material/core': { format: 'cjs', defaultExtension: 'js', main: 'core.js' },
      '@angular2-material/toolbar': { format: 'cjs', defaultExtension: 'js', main: 'toolbar.js' },
      '@angular2-material/card': { format: 'cjs', defaultExtension: 'js', main: 'card.js' },
      '@angular2-material/input': { format: 'cjs', defaultExtension: 'js', main: 'input.js' },
      '@angular2-material/button': { format: 'cjs', defaultExtension: 'js', main: 'button.js' }
    }
  };

  System.config(config);

})(this);
