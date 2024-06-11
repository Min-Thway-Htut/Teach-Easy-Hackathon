document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMsg = document.getElementById('error-msg');
    const logoutButton = document.getElementById('logout');
  
    // Mock user credentials
    const mockUser = {
      email: 'user@example.com',
      password: 'password',
      name: 'John Doe'
    };
  
    // Handle login
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
  
        if (email === mockUser.email && password === mockUser.password) {
          const user = {
            email: email,
            name: mockUser.name,
          };
          localStorage.setItem('user', JSON.stringify(user));
          window.location.href = 'profile.html';
        } else {
          errorMsg.style.display = 'block';
        }
      });
    }
  
    // Handle logout
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.href = 'login.html';
      });
    }
  
    // Display user info on profile page
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && document.getElementById('user-name') && document.getElementById('user-email')) {
      document.getElementById('user-name').textContent = user.name;
      document.getElementById('user-email').textContent = user.email;
    } else if (!user && window.location.pathname.includes('profile.html')) {
      window.location.href = 'login.html';
    }
  });
  