$(document).ready(function () {
  $('.form-content').on('submit', function (event) {
    event.preventDefault();

    $('.error').text('');

    var username = $('#username').val().trim();
    var password = $('#password').val().trim();

    var isValid = true;

    if (username === '') {
      $('#username-error').text('Username is required.');
      isValid = false;
    } else if (/[^a-zA-Z0-9]/.test(username)) {
      $('#username-error').text('Username not allow special characters.');
      isValid = false;
    }

    if (password === '') {
      $('#password-error').append('Password is required.');
      isValid = false;
    } else {
      var errors = [];
      if (
        password.length < 8 &&
        !/[!@#$%^&*(),.?":{}|<>]/.test(password) &&
        !/[0-9]/.test(password) &&
        !/[A-Z]/.test(password)
      ) {
        errors.push('Password in the form of : Dummy@123.');
      }

      if (errors.length > 0) {
        errors.forEach(function (error) {
          $('#password-error').append('<div>' + error + '</div>');
        });
        isValid = false;
      }
    }

    if (isValid) {
      alert('Form is valid!');
    }
  });

  $('#username').on('focus input', function () {
    $('#username-error').text('');
  });

  $('#password').on('focus input', function () {
    $('#password-error').text('');
  });
});
