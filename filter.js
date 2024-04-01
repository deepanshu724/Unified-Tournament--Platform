let search = document.querySelector('#search-game');
let gameCards = document.querySelectorAll('.games');

search.addEventListener('input', (e) => {
    let val = e.target.value.toLowerCase().trim();
    console.log(val);
    gameCards.forEach((card) => {
        let gameName = card.querySelector('h3').innerText.toLowerCase();
        if (gameName.includes(val)) {
            card.classList.remove('hide');
        } else {
            card.classList.add('hide');
        }
    });
});
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
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the "game" class
    var games = document.querySelectorAll('.games');

    // Add click event listener to each element
    games.forEach(function(game) {
        game.addEventListener('click', function() {
            // Redirect to tournament.html
            window.location.href = 'tournament.html';
        });
    });
});

