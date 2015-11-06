var GramView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  template: _.template('<img class="gram" src=<%= src %>>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});
