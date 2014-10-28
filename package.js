Package.describe({
    summary: "perliedman:leafelet-routing-machine porting to meteor",
    version: "1.0.0",
    git: "https://github.com/fuatsengul/leafelet-routing-machine"
    
});

Package.on_use(function(api){
    api.versionsFrom('METEOR@0.9.4.1');
    api.use([
    'mrt:leaflet@0.3.8', 'session@1.0.0', 'underscore@1.0.0'
    ], 'client');

    api.addFiles([
        'LICENSE',
        'lib/leafelet-routing-machine.js',
        'lib/leafelet-routing-machine.min.js',
        'lib/leafelet-routing-machine.css'
    ], 'client');
});
