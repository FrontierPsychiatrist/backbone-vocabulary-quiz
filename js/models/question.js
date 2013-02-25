var quiz = quiz || {};

quiz.Question = Backbone.Model.extend({

    defaults: {
        text: '',
        answer: '',
        highlight: -1, /* Character to highlight */
        answered: 0, /* times answered this questions in total */
        correct: 0 /* times answered this question correct */
    }

});
