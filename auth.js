<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
      <p id="errorMessage" style="color: red;"></p>
    </form>
    <p>Don't have an account? <a href="signup.html">Create one</a></p>
  </div>
  <script src="auth.js"></script>
</body>
</html>
