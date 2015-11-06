var GramsView = Backbone.View.extend({

  initialize: function() {
    // this.render();
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.collection.forEach(this.renderGram, this);
  },

  renderGram: function(gram) {
    var gramView = new GramView({model: gram});
    this.$el.append(gramView.render());
  }

});
