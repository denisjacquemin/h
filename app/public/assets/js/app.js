requirejs.config({
    //baseUrl: 'assets/js',
    paths: {
        vendor: 'vendor'
    },
    shim: {
        'vendor/jquery.history': ['jquery'],
        'vendor/router': ['vendor/jquery.history'],
        'routes': ['vendor/router']
    }
});


require([
    "jquery",
    "routes",
    "services/propertyFetcher",
    "behaviour/search",
    "vendor/responsiveslides"], function($,
                                  routes,
                                  propertyFetcher,
                                  search
    ) {

    $("#slider1").responsiveSlides({
        speed: 800
    });

    var propertyFetcherPromise = propertyFetcher.init();
    propertyFetcherPromise.done(function () { routes.init(); });
    var bindSubmitEventPromise = search.bindSubmitOnForm();

});



