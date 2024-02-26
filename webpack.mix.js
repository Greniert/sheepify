let mix = require('laravel-mix');
let path = require('path');

mix.setResourceRoot('../');
mix.setPublicPath(path.resolve('./'));

mix.webpackConfig({
    stats: {
      children: true
    },
    watchOptions: { ignored: [
        path.posix.resolve(__dirname, './node_modules'),
        path.posix.resolve(__dirname, './css'),
        path.posix.resolve(__dirname, './js')
    ] }
});

mix.js('src/js/app.js', 'assets');                                                                                                                                                                                                                                                          

mix.postCss("src/css/app.css", "assets",[
    require('postcss-custom-properties')
]);


if (mix.inProduction()) {
    mix.version();
} else {
    mix.options({ manifest: false });
}