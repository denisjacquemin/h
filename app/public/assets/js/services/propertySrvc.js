define ([], function () {

    return {
        getPropertiesByLocation: function (city, lat, lng) {
            return $.getJSON( "http://localhost:5000/API/v1/properties?lon=" + lng + '&lat=' + lat);
        }
    }
});


