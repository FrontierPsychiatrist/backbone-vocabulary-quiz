define([
    'backbone',
    'jquery',
    'views/MainView',
    'views/QuizView'
], function(Backbone, $, MainView, QuizView) {

    var router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'quiz/:category': 'quiz',
            'categorySelection': 'categorySelection'
        },

        mainView: new MainView(),

        home: function() {
            var buttons = [ {link: '#categorySelection', text: 'Quiz'},
                {link: '#noroute', text: 'Hochladen'},
                {link: '#noroute', text: 'Herunterladen'}];
            $('#quizApp').html( this.mainView.render(buttons).el );
        },

        quiz: function(category) {
            var quizView = new QuizView({category: category});
            $('#quizApp').html( quizView.el )
        },

        categorySelection: function() {
            var buttons = [ {link: '#quiz/1', text: 'gelernt'},
                {link: '#quiz/2', text: 'gekonnt'},
                {link: '#quiz/3', text: 'neu'}];
            $('#quizApp').html( this.mainView.render(buttons).el );
        }
    });

    var initialize = function() {
        var QuizRouter = new router();
        Backbone.history.start();
    }

    return { initialize: initialize };
});