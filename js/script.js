
var divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
document.body.appendChild(divWrapper);

var title2 = document.createElement('h2');
title2.innerHTML = 'Тест по программированию';
divWrapper.appendChild(title2);

var form = document.createElement('form');
divWrapper.appendChild(form);

/****************************questions - answers*****************************/

var formObject = {
    questions: ["1.Вопрос №1", "2.Вопрос №2", "3.Вопрос №3"],
    answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],

    block: function () {

        for (var i = 0; i < this.questions.length; i++) {
            var p1 = document.createElement('p');
            p1.innerHTML = this.questions[i];
            form.appendChild(p1);

            for (var k = 0; k < this.answers.length; k++) {
                var inputCheck,
                    spanAfterInput,
                    brAfterInput;

                inputCheck = document.createElement('input');
                inputCheck.type = 'checkbox';
                form.appendChild(inputCheck);

                spanAfterInput = document.createElement('span');
                spanAfterInput.innerHTML = this.answers[k];
                form.appendChild(spanAfterInput);

                brAfterInput = document.createElement('br');
                form.appendChild(brAfterInput);
            }

        }
    },
    /************************************Submit*****************************/
    button: function () {
        var inputSubmit = document.createElement('input');
        inputSubmit.type = 'submit';
        inputSubmit.value = 'Проверить мои результаты';
        form.appendChild(inputSubmit);
    }

};


formObject.block();
formObject.button();





