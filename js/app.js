// Grab the pictures 
var grams = new Grams();
var instaGet = function(url) {

  grams.url = url;

  grams.fetch({
    data: {},
    success: function(collection, response, options) {
      
      if (response.pagination.next_url) {
        grams.url = response.pagination.next_url;
        instaGet(response.pagination.next_url);
      }

    },
    error: function(collection, response, options) {
      console.log(response.statusText);
    },
    timeout: 10000
  });

};

instaGet('https://api.instagram.com/v1/users/self/media/recent/?access_token=3175277.86742aa.a14f2444b1404e96a99f7b2d3295b18e');

var app = new AppView({
  collection: grams
});

