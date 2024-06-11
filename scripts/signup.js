document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Implement user signup logic here (e.g., send data to backend)
    console.log('User signed up:', { username, email, password });
  
    // Redirect to login page or dashboard after signup
    window.location.href = 'login.html';
  });
  