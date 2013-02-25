var quiz = quiz || {};

quiz.MainView = Backbone.View.extend({
   tagName: 'div',

    template: _.template( $('#menu-template').html() ),

    render: function() {
        this.$el.html( this.template() );
        return this;
    }
});
