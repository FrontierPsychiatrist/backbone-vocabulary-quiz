var quiz = quiz || {};

function createArray(size) {
    var array = new Array(size);
    for(var i = 0; i < size; i++) {
        array[i] = i;
    }
    return array;
}

function popRandom(array) {
    var index = Math.floor(Math.random()*array.length);
    var ret = array[index];
    array.splice(index, 1);
    return ret;
}

quiz.QuizView = Backbone.View.extend({
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
            var curentQuestion = this.model.questions[this.model.question];
            this.model.message = 'Falsch! ' + curentQuestion.text + ' = ' + curentQuestion.answer;
            this.model.flashClass = 'alert-error';
        }

        this.newQuestion();
    },

    initialize: function() {
        quiz.questions.fetch();
        this.on('newquestion', this.render, this);
        this.model = { message: 'Antwort auswählen', flashClass: 'alert-info' };
        this.newQuestion();
    },

    newQuestion: function() {
        this.model.questions = [];
        var numbers = createArray(quiz.questions.length);
        for(var i = 0; i < 6; i++) {
            var index = popRandom(numbers);
            this.model.questions.push(quiz.questions.at(index).toJSON());
        }
        this.model.question = Math.floor(Math.random() * 6) ;
        this.trigger('newquestion');
    }
});
