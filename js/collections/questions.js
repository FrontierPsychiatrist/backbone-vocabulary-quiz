var quiz = quiz || {};

quiz.QuestionList = Backbone.Collection.extend({
    model: quiz.Question,

    localStorage: new Backbone.LocalStorage('backbone-vocabulary')
});

quiz.questions = new quiz.QuestionList();