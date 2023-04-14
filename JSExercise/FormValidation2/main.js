function Validator(formSelector) {

    // get parent element with target parent selector
    function getParent(inputElement, parentSelector) {
        while (inputElement.parentElement) {
            if (inputElement.parentElement.matches(parentSelector)) break;
            inputElement = inputElement.parentElement;
        }
        return inputElement.parentElement;
    }

    function validate(ruleElement,validatorRules) {
        var parentElement = getParent(ruleElement,'.form-group');
        var errorMsg;
        var inputName = ruleElement.name;
        
        for (var i in formRules[inputName]) {
            var validateName = formRules[inputName][i];
            var validateFunction = validatorRules[formRules[inputName][i]];
            if (validateName.includes(':')) {
                var splits = validateName.split(':');
                var splitRule = splits[0];
                var length = splits[1];
                errorMsg = validatorRules[splitRule](ruleElement.value,length);
            }
            else {
                errorMsg = validateFunction(ruleElement.value);
            }
            if (errorMsg) break;
            
        }
        if (errorMsg) {
            parentElement.classList.add('invalid');
            parentElement.querySelector('.form-message').innerText = errorMsg;
            return true;
        }
        else {
            parentElement.classList.remove('invalid');
            parentElement.querySelector('.form-message').innerText = '';
        }
    }

    const formElement = document.querySelector(formSelector);
    const ruleElements = formElement.querySelectorAll('[name][rules]'); //get elements have attribute rules
    var formRules = {};
    var validatorRules = {
        required: function(value, message = "This field is required!") {
            return value ? undefined : message;
        },
        email: function(value, message = "This field must be email!") {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message;
        },
        min: function(value,length,message) {
            return value.length >= length ? undefined : message || `This field must have more than ${length} characters`;
        }
    }
    Array.from(ruleElements).forEach((element)=>{
        var rules = element.getAttribute('rules').split('|');
        formRules[element.name]=rules;
    })
    console.log(formRules);
    Array.from(ruleElements).forEach((element)=> {
        var parentElement = getParent(element,'.form-group');
        
        element.onblur = function() {
            validate(element,validatorRules);
        }

        element.oninput = function() {
            parentElement.classList.remove('invalid');
            parentElement.querySelector('.form-message').innerText = '';
        }
    })
    var data = {};
    formElement.onsubmit = function(e) {
        e.preventDefault();
        var error = false;

        Array.from(ruleElements).forEach((element) => {
            if (validate(element,validatorRules)) error = true;
        })

        if (!error) {
            Array.from(ruleElements).forEach((element) => {
                data[element.name] = element.value;
            })
            console.log(data);
        }
        else {
            console.error('Error!')
        }
    }
    
}