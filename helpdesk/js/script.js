var btnLogin = document.getElementById('do-Submit');
var idLogin = document.getElementById('Submit');
var username = document.getElementById('username');

btnLogin.onclick = function() {
  // Change content before redirection
  idLogin.innerHTML = '<p>Welcome To Nice Hotel Helpdesk</p><h1>' + username.value + '</h1>';

  // Redirect after 3 seconds
  setTimeout(function() {
    window.location.replace("homepage.html"); // Replace "homepage.html" with the path to your desired HTML file
  }, 3000); // 3000 milliseconds = 3 seconds
};