Package.describe({
  summary: "A reactive router built on page.js"
});

Npm.depends({
  'connect': '2.7.10'
});

Package.on_use(function (api, where) {
  api.use('deps', 'client');
  api.use('startup', 'client');
  api.use('templating', 'client');
  api.use('handlebars', 'client');
  api.use('page-js-ie-support', 'client');
  api.use('underscore', ['client', 'server']);
  api.use('HTML5-History-API', 'client', {weak: true});
  
  api.add_files('lib/router_client.js', 'client');
  api.add_files('lib/router_helpers.js', 'client');
  api.add_files('lib/router_server.js', 'server');
  api.add_files('lib/router_common.js', ['client', 'server']);
  
  // for backward compat before Meteor linker changes
  if (typeof api.export !== 'undefined') {
    api.use('webapp', 'server');
  }
});
