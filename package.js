Package.describe({
  name: 'fuatsengul:leaflet-routing-machine',
  summary: 'perliedman:leaflet-routing-machine porting to meteor',
  version: '1.0.10',
  git: 'https://github.com/fuatsengul/fuatsengul-leaflet-routing-machine'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('mrt:leaflet@0.3.8', 'client');
  api.addFiles('fuatsengul:leaflet-routing-machine.js', 'client');
  api.addFiles('fuatsengul:leaflet-routing-machine.css', 'client');
});


Package.onTest(function(api) {

  api.use('tinytest');
  api.use('fuatsengul:leaflet-routing-machine');
});
