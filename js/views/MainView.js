define([
    'backbone',
    'underscore',
    'jquery'
], function(Backbone, _, $) {
    var MainView =  Backbone.View.extend({
        tagName: 'div',

        template: _.template( $('#menu-template').html() ),

        render: function(buttons) {
            this.model.buttons = buttons;
            this.$el.html( this.template(this.model) );
            return this;
        },

        initialize: function() {
            this.model = {};
        }
    });

    return MainView;
});