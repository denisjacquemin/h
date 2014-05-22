define(["vendor/idbstore.min", "services/propertySrvc"], function (IDBStore, propertySrvc) {

    var properties;

    return {
        init: function () {
            var deferred = $.Deferred();
            try {
                properties = new IDBStore({
                    storeName: 'property5',
                    keyPath: 'urlid',
                    autoIncrement: false,
                    dbVersion: 1,
                    onStoreReady: function () {
                        deferred.resolve();
                    }
                });
            } catch (e) {
                deferred.reject(e);
            }
            return deferred.promise();
        },


        storeProperties: function (propertiesData) {
            var deferred = $.Deferred();
            properties.putBatch(propertiesData, function success(data) {deferred.resolve(propertiesData);},function error(e) {deferred.reject(e);})
            return deferred.promise();
        },

        refreshProperties: function(city, lat, lng) {
            return propertySrvc.getPropertiesByLocation(city, lat, lng); // return a promise
        },

        getProperties: function ()  {
            var deferred = $.Deferred();
            properties.getAll(function success(data) {deferred.resolve(data);},function error(e) {deferred.reject(e);});
            return deferred.promise();
        },

        getPropertyByUrlid: function(urlid) {
            var deferred = $.Deferred();

            try {
                var queryOptions = {};
                queryOptions.only = urlid;
                var keyRange = properties.makeKeyRange(queryOptions);

                var theProperty;
                properties.query(function (results) {
                    theProperty = results[0];
                    deferred.resolve(theProperty);
                }, {keyRange: keyRange});

            } catch (e) {
                deferred.reject(e);
            }
            return deferred.promise();
        },

        clearProperties: function () {
            var deferred = $.Deferred();
            properties.clear(function success(data) { deferred.resolve(data);}, function error(e) { deferred.reject(e);});
            deferred.resolve();
            return deferred.promise();
        }

    }
});
