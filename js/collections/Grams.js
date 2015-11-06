var Grams = Backbone.Collection.extend({

  model: Gram,

  url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3175277.86742aa.a14f2444b1404e96a99f7b2d3295b18e', 

  sync: function(method, collection, options) {
    options.dataType = 'jsonp';
    return Backbone.sync(method, collection, options);
  },

  parse: function(response, options) {
    
    console.log("time to parse");
    console.log(response.data);

    var results = [];

    response.data.forEach(function(image){
      if (image.tags[0] === 'walkingman') {
        
        var loc = image.caption.text.slice(0, image.caption.text.indexOf(' #'));
        var src = image.images.standard_resolution.url;

        console.log(loc);
        console.log(src);

        results.push({
          src: src,
          loc: loc
        });

        // $('body').append($('<img/>', {'src': image.images.standard_resolution.url,
        //                                'class': 'gram',
        //                                'data-loc' : loc }));              
      }
    });

    return results;

  }

});
