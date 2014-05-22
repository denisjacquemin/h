define(function () {

    return {
        bindSubmitOnForm: function () {
            var deferred = $.Deferred();
            try {
                $('#search form').submit(function (e) {
                    require(['routes', 'actions'], function (r, a) {
                        a.setRefreshFlag(true);
                        r.navigate('/' + $('#location').val());
                    });
                    e.preventDefault();
                });
                deferred.resolve();
            } catch (e) { deferred.reject(e); }
            return deferred.promise();
        },

        setPropertiesMode: function () {
            var deferred = $.Deferred();
            try {
                $('#search').addClass('propertiesMode');
                deferred.resolve();
            } catch (e) { deferred.reject(e); }
            return deferred.promise();
        },

        setPropertyMode: function () {
            var deferred = $.Deferred();
            try {
                $('#search').addClass('propertyMode');
                deferred.resolve();
            } catch (e) { deferred.reject(e); }
            return deferred.promise();
        }
    }

});

