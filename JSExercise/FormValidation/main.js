const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function Validator({form,rules,onSubmit}) {
    const formElement = $(form);
    // get the parentElement form-group from inputElement
    function getParent(element,selector) {
        var parent = element;
        while (parent.parentElement) {
            if (parent.parentElement.matches(selector)) return parent.parentElement
            else {
                parent = parent.parentElement;
            }
        }
    }


    //create the rule selector for using many rules for an element
    var ruleSelector = {}
    
    function validate(inputElement, rule) {
        var parentElement = getParent(inputElement,'.form-group');
        var formMsg = parentElement.querySelector('.form-message');
        var errorMsg;
        for (var i in ruleSelector[rule.selector]) {
            // since the test function are in the array of each element in the ruleSelector, we can call it here
            var type = inputElement.type;
            switch(type) {
                case 'radio':
                    errorMsg = ruleSelector[rule.selector][i](
                        document.querySelector(rule.selector+':checked')
                    );
                    break;
                case 'checkbox':
                    break;
                default:
                    errorMsg = ruleSelector[rule.selector][i](inputElement.value);
            }
            
            if (errorMsg) {
                formMsg.innerText = errorMsg;
                parentElement.classList.add('invalid');
                break; //if there's already a function error in the array, we dont have to validate the other yet!
            }
            else {
                formMsg.innerText = '';
                parentElement.classList.remove('invalid');
            } 
            
        }

        return !errorMsg;
    }
    
    if (formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();
            var isFormValid = true;
            var data = {
                
            }
            // check if there're any invalid input. If yes, set formvalid to false.
            rules.forEach(rule => {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement,rule);
                if (!isValid) isFormValid = false;
                else {
                    data[rule.selector] = inputElement.value
                }
            });
            
            //Other way to get data
            
            if (isFormValid) {
                var dataElements = formElement.querySelectorAll('[name]:not([disabled])')
                var formValues = Array.from(dataElements).reduce(function(values, input){
                    switch (input.type) {
                        case 'radio':
                            if (input.checked) values[input.name] = input.value
                            break;
                        case 'checkbox':
                            if (!Array.isArray(values[input.name])) values[input.name] = [];
                            if (input.checked) values[input.name].push(input.value);
                            break;
                        case 'file':
                            values[input.name] = input.files;
                            break;
                        default:
                            values[input.name] = input.value
                    }
                    return values;
                },{})
                onSubmit(formValues);
                
            }
            else {
                alert('Please enter all information!')
            }
        }

        rules.forEach(rule => {
            // adding rules for each selector element to the object rule selector
            if (!Array.isArray(ruleSelector[rule.selector])) {
                ruleSelector[rule.selector] = [rule.test];
            }
            else {
                ruleSelector[rule.selector].push(rule.test);
            }
             
            var inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function(inputElement){
                var parentElement = getParent(inputElement,'.form-group')
                var formMsg = parentElement.querySelector('.form-message');
                if (inputElement) {
                    inputElement.onblur = function(e) {
                        validate(inputElement,rule)
                    }
                    inputElement.oninput = function() {
                        formMsg.innerText = '';
                        parentElement.classList.remove('invalid');
                    }
                }
            })
            
        });
    }
}


Validator.isRequired = function(selector, message = 'This field is required!') {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message;
        }
    }
}

Validator.isEmail = function(selector, message = 'This field must be an email!') {
    return {
        selector: selector,
        test: function(value) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? undefined : message;
        }
    }
}

Validator.isPassword = function(selector, message = 'Password must between 8-15 characters!, at least one lowercase, one uppercase, one numeric, and one special character') {
    return {
        selector: selector,
        test: function(value) {
            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value) ? undefined : message;
        }
    }
}

Validator.isSame = function(selector, getConfirmValue, message = 'Does not match!') {
    return {
        selector: selector,
        test: function(value) {
            return (value===getConfirmValue()) ? undefined : message;
        }
    }
}