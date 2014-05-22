define(function () {

    return {

        setPropertiesMode: function () {
            var deferred = $.Deferred();
            try {
                $('#properties').addClass('propertiesMode');
                deferred.resolve();
            } catch (e) { deferred.reject(e); }
            return deferred.promise();
        },

        setPropertyMode: function () {
            var deferred = $.Deferred();
            try {
                $('#properties').addClass('propertyMode');
                deferred.resolve();
            } catch (e) { deferred.reject(e); }
            return deferred.promise();
        },

        animOut: function () {
            var deferred = $.Deferred();
            try {
                $('#properties').fadeOut();
                deferred.resolve();
            } catch (e) { deferred.reject(e); }
            return deferred.promise();
        },

        animIn: function () {
            var deferred = $.Deferred();
            try {
                $('#properties').fadeIn();
                deferred.resolve();
            } catch (e) { deferred.reject(e); }
            return deferred.promise();
        }
    }
});