// Grab the pictures 
var grams = new Grams();
grams.fetch({
  data: {},
  success: function(collection, response, options) {
    // console.log(collection);
    // console.log(response);
    // grams.parse(response, options);
    // console.log(options);
  },
  error: function(collection, response, options) {
    console.log(response.statusText);
  },
  // A timeout is the only way to get an error to JSONP calls
  timeout: 10000
});



var app = new AppView({
  collection: grams
});

