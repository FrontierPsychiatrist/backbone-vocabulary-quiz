define([
    'backbone'
], function (Backbone) {
    var Question =  Backbone.Model.extend({

        defaults: {
            text: '',
            answer: '',
            highlight: -1, /* Character to highlight */
            category: 3,
            globalIndex: -1
        }

    });

    return Question;
});