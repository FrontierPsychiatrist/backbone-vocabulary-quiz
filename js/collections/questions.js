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

    var getRandomElements = function(number) {
        var out = [];
        var numbers = createArray(questions.length);
        for (var i = 0; i < number; i++) {
            var index = popRandom(numbers);
            out.push(questions[index]);
        }
        return out;
    }

    var loadFromLocalStorage = function() {
        var fromStorage = JSON.parse(localStorage.getItem('vocabulary'));

        for(var i = 0; i < fromStorage.length; i++) {
            var question = new Question( {
                text: fromStorage[i].question,
                answer: fromStorage[i].answer
            });
            if(fromStorage[i].highlight !== undefined) {
                question.set('highlight', fromStorage[i].highlight);
            }
            questions.push(question);
        }
    }

    var at = function(index) {
        return questions[index];
    }

    return {
        getRandomElements: getRandomElements,
        at: at,
        initialize: loadFromLocalStorage
    };
});


