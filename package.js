Package.describe({
  name: 'fuatsengul:leaflet-routing-machine',
  summary: 'perliedman:leafelet-routing-machine porting to meteor',
  version: '1.0.0',
  git: 'https://github.com/fuatsengul/leafelet-routing-machine'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'lib/leafelet-routing-machine.js',
    'lib/leafelet-routing-machine.min.js',
    'lib/leafelet-routing-machine.css']);

  api.use('mrt:leaflet@0.3.8', 'client');
});


Package.onTest(function(api) {

  api.use('tinytest');
  api.use('mrt:leaflet@0.3.8');
  api.use('fuatsengul:leaflet-routing-machine');
  api.addFiles([
    'lib/leafelet-routing-machine.js',
    'lib/leafelet-routing-machine.min.js',
    'lib/leafelet-routing-machine.css']);
});
