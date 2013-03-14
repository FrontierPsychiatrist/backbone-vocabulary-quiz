define([
    'models/question'
], function(Question) {
    var questions = [];

    var createArray = function(size) {
        var array = new Array(size);
        for(var i = 0; i < size; i++) {
            array[i] = i;
        }
        return array;
    }

    var popRandom = function(array) {
        var index = Math.floor(Math.random()*array.length);
        var ret = array[index];
        array.splice(index, 1);
        return ret;
    }

    var getRandomElements = function(number, category) {
        var categoryQuestions = questions.filter(function (element) {
            return element.get('category') == category;
        });
        var out = [];
        var numbers = createArray(categoryQuestions.length);
        for (var i = 0; i < number; i++) {
            var index = popRandom(numbers);
            out.push(categoryQuestions[index]);
        }
        return out;
    }

    var loadFromLocalStorage = function() {
        var fromStorage = JSON.parse(localStorage.getItem('vocabulary'));

        for(var i = 0; i < fromStorage.length; i++) {
            var question = new Question( {
                text: fromStorage[i].text,
                answer: fromStorage[i].answer,
                highlight: fromStorage[i].highlight,
                category: fromStorage[i].category,
                globalIndex: i
            });
            questions.push(question);
        }
    }

    var writeToLocalStorage = function() {
        localStorage.setItem('vocabulary', JSON.stringify(questions));
    }

    var at = function(index) {
        return questions[index];
    }

    var setItem = function(index, element) {
        questions[index] = element;
    };

    return {
        getRandomElements: getRandomElements,
        at: at,
        setItem: setItem,
        initialize: loadFromLocalStorage,
        writeToLocalStorage: writeToLocalStorage
    };
});


