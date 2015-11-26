Package.describe({
  name: 'astrocoders:infinite-scroll',
  version: '0.0.2',
  summary: 'Simple infinite scroll',
  git: 'https://github.com/Astrocoders/meteor-infinite-scroll/',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'ecmascript',
    'jquery',
    'ui',
    'blaze',
    'templating',
    'underscore'
  ]);

  api.addFiles([
    'infinite-scroll.js'
  ], 'client');

  api.export('InfiniteScroll', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('astrocoders:infinite-scroll');
  api.addFiles('infinite-scroll-tests.js');
});
