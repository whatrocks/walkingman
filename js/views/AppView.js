var AppView = Backbone.View.extend({

  el: '.main',

  initialize: function() {

    this.title = new TitleView();
    
    this.grams = new GramsView({
      collection: this.collection
    });

    this.render();

  },

  render: function() {

    this.$el.append([
      this.title.$el,
      this.grams.$el
    ]);

  }

});
