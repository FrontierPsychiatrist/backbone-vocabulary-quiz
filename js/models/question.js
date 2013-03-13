define([
    'backbone'
], function (Backbone) {
    var Question =  Backbone.Model.extend({

        defaults: {
            text: '',
            answer: '',
            highlight: -1, /* Character to highlight */
        }

    });

    return Question;
});