define(["vendor/mustache"], function (m) {

    return {
        renderProperty: function (dataToRender) {
            var deferred = $.Deferred();

            try {
                var template = $('#property-tmpl').html();
                m.parse(template);   // optional, speeds up future uses

                var container = $('#property');
                container.html(m.render(template, dataToRender));
                deferred.resolve(container);
            } catch (e) {
                deferred.reject(e);
            }

            return deferred.promise();
        }
    }
});
