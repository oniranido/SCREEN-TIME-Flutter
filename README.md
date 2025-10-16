### 1. `login.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Digital Well Being</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        <form id="loginForm">
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" required>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="signup.html">Create one</a></p>
    </div>
    <script src="auth.js"></script>
</body>
</html>
```

### 2. `signup.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up - Digital Well Being</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Create Account</h1>
        <form id="signupForm">
            <label for="newEmail">Email:</label>
            <input type="email" id="newEmail" required>
            <label for="newPassword">Password:</label>
            <input type="password" id="newPassword" required>
            <button type="submit">Create Account</button>
        </form>
        <p>Already have an account? <a href="login.html">Login</a></p>
    </div>
    <script src="auth.js"></script>
</body>
</html>
```

### 3. `auth.js`

This JavaScript file will handle the login and signup logic, including storing user credentials in `localStorage`.

```javascript
// auth.js

// Function to handle user signup
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert('User already exists. Please login.');
        return;
    }

    // Create new user and store in localStorage
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created successfully! You can now login.');
    window.location.href = 'login.html'; // Redirect to login page
});

// Function to handle user login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to main page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
```

### Explanation of the Code

1. **HTML Structure**:
   - Both `login.html` and `signup.html` contain a simple form for user input (email and password).
   - Each form has a submit button and a link to navigate between the login and signup pages.

2. **JavaScript Logic (`auth.js`)**:
   - The signup form checks if the user already exists in `localStorage`. If not, it creates a new user and stores the credentials.
   - The login form retrieves the stored users and checks if the entered credentials match any existing user. If they do, the user is redirected to the main page.

### How to Use

- Place the `login.html`, `signup.html`, and `auth.js` files in your project directory.
- Ensure that the `style.css` file is linked correctly for consistent styling.
- Users can create an account and log in, with their credentials stored in `localStorage`.

### Running the Project

To run the project, follow these steps:

1. Open Visual Studio Code.
2. Install the Live Server extension if you haven't already.
3. Open the `index.html` file and right-click to select "Open with Live Server".
4. Navigate to the login or signup pages using the links provided.

### Deployment

You can deploy your project for free using GitHub Pages or Netlify by following their respective documentation for deploying static sites. Just ensure all files are pushed to your repository or uploaded to Netlify.
