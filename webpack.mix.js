const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    // .options({
    //   purifyCss: true
    // })
    .version()
    .sourceMaps();

mix.imgCDN = function(path, cdn) {
    let file = new File(path);

    // Replace all occurrences of /images/ with CDN URL prepended
    let contents = file.read().replace(/\/img\//g, cdn + "/img/");
    file.write(contents);

    // Update version hash in manifest
    Mix.manifest.hash(file.pathFromPublic()).refresh();

    return this;
}.bind(mix);

if (mix.inProduction()) {
    mix.then(function() {
        let cdn = process.env.ASSET_URL;
        if (cdn !== undefined) {
            mix.imgCDN("public/css/app.css", cdn).imgCDN(
                "public/js/app.js",
                cdn
            );
        }
    });
}
