define([
    'backbone',
    'underscore',
    'jquery',
    'collections/questions'
], function(Backbone, _, $, questions) {

    var QuizView = Backbone.View.extend({
        tagName: 'div',

        template: _.template( $('#quiz-template').html() ),

        events: {
            'click .answerButton': 'answer'
        },

        render: function() {
            this.$el.html( this.template( this.model ) );
            return this;
        },

        answer: function(event) {
            var answer = event.target.value;
            if(answer == this.model.question) {
                this.model.message = 'Richtig!';
                this.model.flashClass = 'alert-info';
            } else {
                var currentQuestion = this.model.questions[this.model.question];
                this.model.message = 'Falsch! ' + currentQuestion.get('text') + ' = ' + currentQuestion.get('answer');
                this.model.flashClass = 'alert-error';
            }

            this.newQuestion();
        },

        initialize: function() {
            this.on('newquestion', this.render, this);
            this.model = { message: 'Antwort auswählen', flashClass: 'alert-info' };
            this.newQuestion();
        },

        newQuestion: function() {
            this.model.questions = questions.getRandomElements(6);
            this.model.question = Math.floor(Math.random() * 6) ;
            this.trigger('newquestion');
        }
    });

    return QuizView;
});

