Package.describe({
  name: 'fuatsengul:leaflet-routing-machine',
  summary: 'perliedman:leaflet-routing-machine porting to meteor',
  version: '1.0.0',
  git: 'https://github.com/fuatsengul/fuatsengul-leaflet-routing-machine'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'lib/leaflet-routing-machine.js',
    'lib/leaflet-routing-machine.min.js',
    'lib/leaflet-routing-machine.css']);

  api.use('mrt:leaflet@0.3.8', 'client');
});


Package.onTest(function(api) {

  api.use('tinytest');
  api.use('mrt:leaflet@0.3.8');
  api.use('fuatsengul:leaflet-routing-machine');
  api.addFiles([
    'lib/leaflet-routing-machine.js',
    'lib/leaflet-routing-machine.min.js',
    'lib/leaflet-routing-machine.css']);
});
