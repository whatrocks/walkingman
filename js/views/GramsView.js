var GramsView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.collection.forEach(this.renderGram, this);
  },

  renderGram: function(gram) {
    var gramView = new GramView({model: gram});
    this.$el.addClass('pics col-s12');
    this.$el.append(gramView.render());
  }

});
