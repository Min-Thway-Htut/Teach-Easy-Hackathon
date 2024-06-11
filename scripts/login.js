document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Perform login logic here
    console.log('Email:', email, 'Password:', password);
    // Redirect to courses page upon successful login
    window.location.href = 'courses.html';
  });
  