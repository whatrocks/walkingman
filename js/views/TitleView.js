var TitleView = Backbone.View.extend({

  el: '<h1>',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.text("#WALKINGMAN");
    this.$el.addClass('center-align');
    return this;
  }

});
