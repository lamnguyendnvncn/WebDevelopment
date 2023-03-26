function Validator({form,rules}) {
    const formElement = document.querySelector(form);

    var ruleSelector = {};

    function validate(inputElement, rule) {
        const parentElement = inputElement.parentElement;
        const errorMsgElement = parentElement.querySelector('.form-message');
        for (var i in ruleSelector[rule.selector]) {
            var errorMsg = ruleSelector[rule.selector][i](inputElement.value);

            if (errorMsg) {
                parentElement.classList.add('invalid');
                errorMsgElement.innerText = errorMsg;
                break;
            }
            else {
                parentElement.classList.remove('invalid');
                errorMsgElement.innerText = '';
            }

        }
        
    }

    if (formElement) {
        rules.forEach(rule => {
            if (Array.isArray(ruleSelector[rule.selector])) {
                ruleSelector[rule.selector].push(rule.test);
            }
            else {
                ruleSelector[rule.selector] = [rule.test];
            }

            const inputElement = formElement.querySelector(rule.selector);
            const parentElement = inputElement.parentElement;
            const errorMsgElement = parentElement.querySelector('.form-message');

            inputElement.onblur = function() {
                validate(inputElement,rule);
            }

            inputElement.oninput = function() {
                parentElement.classList.remove('invalid');
                errorMsgElement.innerText = '';
            }
        });
    }
}

Validator.isRequired = function(selector, message = 'This field is required!') {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message
        }
    }
}

Validator.isEmail = function(selector, message = 'This field must be an email address!') {
    return {
        selector: selector,
        test: function(value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message
        }
    }
}

Validator.isPassword = function(selector, message = 'Password is not valid! Please enter again!') {
    return {
        selector: selector,
        test: function(value) {
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
            return regex.test(value) ? undefined : message
        }
    }
}

Validator.isConfirmed = function(selector, confirmValue ,message = 'Password does not match!') {
    return {
        selector: selector,
        test: function(value) {
            return (value===confirmValue()) ? undefined : message;
        }
    }
}

