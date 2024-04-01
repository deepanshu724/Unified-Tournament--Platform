let pass = document.querySelector('#password');
let confirm = document.querySelector('#confirm-password-again');
let error = document.querySelector('#alert');
let form = document.querySelector("#myForm"); // Assuming your form has an id of "myForm"
let flag = 1;

confirm.addEventListener("keyup", () => {
    if (confirm.value.length > 0) {
        if (confirm.value != pass.value) {
            error.innerText = "confirm password does not match";
            flag = 0;
        } else {
            error.innerText = "";
            flag = 1; // Reset flag when passwords match
        }
    } else {
        error.innerText = "Please enter confirm password";
    }
});

form.addEventListener("submit", (event) => {
    if (flag === 0) {
        event.preventDefault(); // Prevent form submission if passwords don't match
        error.innerText = "confirm password does not match";
    } else {
        let username = document.querySelector('#username').value.trim();
        if (username !== '') {
            localStorage.setItem('username', username); // Save the username to local storage
            console.log('Username saved:', username);
            window.location.href = 'index.html'; // Redirect to another HTML file
        } else {
            event.preventDefault(); // Prevent form submission if username is empty
            console.log('Please fill in all required fields.');
        }
    }
});


form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    
    let username = document.querySelector('#username').value.trim();
    
    if (username !== '') {
        localStorage.setItem('username', username); // Save the username to local storage
        console.log('Username saved:', username);
        window.location.href = 'index.html'; // Redirect to 'index.html'
    } else {
        console.log('Please fill in all required fields.');
    }
});



// nav menu 
function toggleMenu() {
    let menu = document.getElementById('menu');
    let closeButton = document.querySelector('.close-button');

    menu.classList.toggle('opacity-100');
    menu.classList.toggle('top-0');
    menu.classList.toggle('-top-[400px]');
    
    // Delay showing the close button
    setTimeout(function() {
        closeButton.style.display = 'block';
    }, 500); // Adjust the delay time as needed (500 milliseconds in this example)
}

function closeMenu() {
    let menu = document.getElementById('menu');
    let closeButton = document.querySelector('.close-button');
    menu.classList.remove('opacity-100');
    menu.classList.remove('top-0');
    menu.classList.add('-top-[400px]');
    
    // Hide close button
    closeButton.style.display = closeButton.style.display === 'block' ? 'none' : 'block';
}

