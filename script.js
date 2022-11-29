
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const form_fields = [username, email];

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

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!input.value.trim().match(pattern)) {
    return {"result": false, "result_msg": "Email is invalid."};
  } else {
    return {"result": true, "result_msg": input};
  }
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min || input.value.length > max) {
      return {"result": false, "result_msg": `${getFieldName(input)} must be between ${min} and ${max} characters.`};
  } else {
      return {"result": true, "result_msg": ""};
  }
}


  return {"result": validated, "result_msg": validation_msg.trim()}

}

// Get fieldname
function getFieldName(input) {
  return (input.id.charAt(0).toUpperCase() + input.id.slice(1)).replace("-", " ");
}

// Event listeners
form.addEventListener('submit', function(event) {
  event.preventDefault();


    username_check = checkLength(username, 3, 15)
    if(!username_check["result"]) {
      showError(username, username_check["result_msg"])
    }
    else {
      showSuccess(username)
    }

    // console.log(checkLength(username, 3, 15));

    email_check = checkEmail(email)
    if(!email_check["result"]) {
      showError(email, email_check["result_msg"])
    }
    else {
      showSuccess(email)
    }

    // console.log(checkEmail(email));

}
);
