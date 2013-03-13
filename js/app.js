define([
    'router',
    'collections/questions'
], function(Router,questions) {

    var initialize = function() {
        questions.initialize();
        Router.initialize();
    }

    return {initialize: initialize};
});