define(["vendor/mustache"], function (m) {

    return {
        renderProperties: function (properties) {
            var deferred = $.Deferred();

            var dataToRender = {
                properties: properties
            }

            try {
                var template = $('#properties-tmpl').html();
                m.parse(template);   // optional, speeds up future uses

                var container = $('#properties');
                container.html(m.render(template, dataToRender));
                deferred.resolve(container);
            } catch (e) {
                deferred.reject(e);
            }

            return deferred.promise();
        }
    }
});
