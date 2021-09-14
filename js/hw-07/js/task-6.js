// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

const inputValidation = document.querySelector('#validation-input');
const inputValidationLength = inputValidation.getAttribute('data-length');

const validation = () => {
    if (+inputValidationLength === inputValidation.value.length) {
        inputValidation.classList.remove('invalid');
        inputValidation.classList.add('valid');
    } else {
        inputValidation.classList.remove('valid');
        inputValidation.classList.add('invalid');
    }
}
    
inputValidation.addEventListener('focusout', validation)


