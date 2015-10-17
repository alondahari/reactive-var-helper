Package.describe({
  name: 'jazzdragon:reactive-var-helper',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A helper to nicely organize your reactive vars',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jazzdragon/reactive-var-helper',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use(['templating', 'underscore']);
  api.addFiles('reactive-var-helper.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jazzdragon:reactive-var-helper');
  api.addFiles('reactive-var-helper-tests.js', 'client');
});
