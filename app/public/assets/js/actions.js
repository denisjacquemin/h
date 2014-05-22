define([
    "services/propertyFetcher",
    "behaviour/property",
    "behaviour/search",
    "behaviour/properties"
], function (f,
             behaviourProperty,
             behaviourSearch,
             behaviourProperties
    ) {

    function setHomeMode() {
        $('body')
            .removeClass('propertyMode propertiesMode')
            .addClass('homeMode');
    }

    function setPropertiesMode () {
        $('body')
            .removeClass('propertyMode homeMode')
            .addClass('propertiesMode');
    }

    function setPropertyMode () {
        $('body')
            .addClass('propertyMode')
            .removeClass('propertiesMode homeMode');
    }

    var refreshProperties = false;

    return {
        showHome: function () {
            setHomeMode();
        },
        showProperties: function (city, lat, lng) {
            console.log('action: showProperties');
            $('#location').val(city);
            if (refreshProperties) {
                var animOutPromise = behaviourProperties.animOut();

                animOutPromise.done(function () {
                    var clearPromise = f.clearProperties();
                    clearPromise.done(function () {
                        console.log('clear done');

                        var refreshPromise = f.refreshProperties(city, lat, lng);
                        refreshPromise.done(function (data) {
                            console.log('refresh done');
                            var storePromise = f.storeProperties(data);
                            storePromise.done(function (data) {
                                console.log('store done');
                                refreshProperties = false;

                                require(["renderer/properties"], function (rProperties) {
                                    var renderPromise = rProperties.renderProperties(data);


                                    renderPromise.done(function() {
                                        setPropertiesMode();
                                        behaviourProperty.bindClickOnProperty();
                                        behaviourProperties.animIn();
                                        console.log('render done');
                                    });

                                });
                            });
                            storePromise.fail(function (e) {
                                console.log('storePromise failed: ' + e);
                            });

                        }); // function (data) { renderProperties(data);
                        refreshPromise.fail(function (e) {
                            console.log('refreshPromise failed: ' + e);
                        });
                    });
                    clearPromise.fail(function (e) {
                        console.log('clearPromise failed: ' + e);
                    });
                });
            } else {
                setPropertiesMode();
            }
        },

        showProperty: function (city, urlid) {
            console.log('action: showProperty');

            getPropertyPromise = f.getPropertyByUrlid(city + '/' + urlid);

            getPropertyPromise.done( function(data) {
                require(["renderer/property"], function (rProperty) {
                    var renderPromise = rProperty.renderProperty(data);
                    renderPromise.done(function () {
                        setPropertyMode();
                    });
                });
            });
        },

        setRefreshFlag: function (value) {
            refreshProperties = value;
        }

    }
});