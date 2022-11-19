
const form = document.getElementById('form');
const username = document.getElementById('firstname');
const email = document.getElementById('email');
const form_fields = [firstname, email];

// Check required fields
function checkRequired(inputArr) {
    validated = true;
    inputArr.forEach(function (input) {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required.`);
        validated = false;
      }
    });
   return validated;
  }

  // Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }
