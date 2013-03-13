define([
    'backbone',
    'underscore',
    'jquery'
], function(Backbone, _, $) {
    var MainView =  Backbone.View.extend({
        tagName: 'div',

        template: _.template( $('#menu-template').html() ),

        render: function() {
            this.$el.html( this.template() );
            return this;
        }
    });

    return MainView;
});