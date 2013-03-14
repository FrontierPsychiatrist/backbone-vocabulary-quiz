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
            buttons = [ {link: '#quiz', text: 'Quiz'},
                {link: '#noroute', text: 'Hochladen'},
                {link: '#noroute', text: 'Herunterladen'}];
            $('#quizApp').html( this.mainView.render(buttons).el );
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