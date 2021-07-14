var copy = require('copy')

copy('./resources-backup/**/*', './release/limitPNG.app/resources/', function(err, files) {
    if (err) throw err;
    // `files` is an array of the files that were copied
});