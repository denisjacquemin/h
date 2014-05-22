define(["vendor/router", "actions"], function (router, actions) {

    var router = new Router();

    return {
        init: function () {
            //Define routes with their respective callback function
            router.route('/', function () { actions.showHome() });
            router.route('/:city',          function (city)           {
                console.log('handle statechange');
                actions.showProperties(city, 50.19905, 5.31675, true) }
            );
            router.route('/:city/:urlid',   function (city, urlid)    { actions.showProperty(city, urlid)  });
            router.route('',                function ()         { console.log("default route")});

            //router.start();
        },

        navigate: function (url) {
            router.navigate(url);
        }
    }
});

