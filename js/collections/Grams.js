var Grams = Backbone.Collection.extend({

  model: Gram,

  sync: function(method, collection, options) {
    options.dataType = 'jsonp';
    return Backbone.sync(method, collection, options);
  },

  parse: function(response, options) {

    var results = [];

    response.data.forEach(function(image){
      if (image.tags[0] === 'walkingman') {
        
        var loc = image.caption.text.slice(0, image.caption.text.indexOf(' #'));
        var src = image.images.standard_resolution.url;

        results.push({
          src: src,
          loc: loc
        });
      }
    });

    return results;

  }

});
