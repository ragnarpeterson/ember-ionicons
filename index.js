'use strict';

module.exports = {
  name: 'ember-ionicons',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ionicons/css/ionicons.css');

    ['eot', 'svg', 'ttf', 'woff'].forEach(function(ext) {
      var path = app.bowerDirectory + '/ionicons/fonts/ionicons.' + ext;
      app.import(path, { destDir: 'fonts' });
    });
  }
};
