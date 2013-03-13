define([
    'backbone',
    'jquery',
    'views/MainView',
    'views/QuizView'
], function(Backbone, $, MainView, QuizView) {

    var router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'quiz': 'quiz'
        },

        mainView: new MainView(),

        home: function() {
            $('#quizApp').html( this.mainView.render().el );
        },

        quiz: function() {
            var quizView = new QuizView();
            $('#quizApp').html( quizView.el )
        }
    });

    var initialize = function() {
        var QuizRouter = new router();
        Backbone.history.start();
    }

    return { initialize: initialize };
});