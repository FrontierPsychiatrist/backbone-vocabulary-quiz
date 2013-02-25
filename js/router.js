var quiz = quiz || {};

var router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'quiz': 'quiz'
    },

    mainView: new quiz.MainView(),

    home: function() {
        $('#quizApp').html( this.mainView.render().el );
    },

    quiz: function() {
        var quizView = new quiz.QuizView();
        $('#quizApp').html( quizView.el )
    }
});

quiz.QuizRouter = new router();
Backbone.history.start();