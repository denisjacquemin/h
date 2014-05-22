define(function () {

    return {
        bindClickOnProperty: function() {
            require(['routes'], function (r){
                $('#properties .info').click( function (e) {
                    r.navigate('/' + $(this).data('hrefUrl'));
                    e.preventDefault();
                });
            });

        },

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
                $('#property').slideUp();
                deferred.resolve();
            } catch (e) { deferred.reject(e); }
            return deferred.promise();
        },

        animIn: function () {
            var deferred = $.Deferred();
            try {
                $('#property').slideDown();
                deferred.resolve();
            } catch (e) { deferred.reject(e); }
            return deferred.promise();
        }

    }
});


