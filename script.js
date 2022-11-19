var nextStep = document.querySelector('#submit');

nextStep.addEventListener('click', function (e) {
  e.preventDefault();
  // Hide first view
  document.getElementById('form').style.display = 'none';

  // Show thank you message element
  document.getElementById('thank_you').style.display = 'block';
});
