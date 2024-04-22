document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check username and password and redirect accordingly
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'admin/index.html';
    } else {
        window.location.href = 'helpdesk/index.html';
    }
});
