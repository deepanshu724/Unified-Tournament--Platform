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
};
var tl=gsap.timeline()
tl.from('.animation',{
    y:-50,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.2,
})
tl.from('.anima',{
    y:50,
    delay:0.5,
    opacity:0,
    duration:1,
    ease: "back(5)",
    stagger:0.2,
})

window.onload = function () {
    // Define the animation timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Set up the animation
    tl.to(".icon", { duration: 1.5, y: -15, ease: "power2.inOut" })
      .to(".icon", { duration: 1.5, y: 5, ease: "power1.inOut" });

    // Alternatively, you can use a shorthand method for yoyo effect
    // tl.to("#icon", { duration: 1, y: -20, ease: "power1.inOut", yoyo: true, repeat: -1 });
};
const card = document.querySelectorAll('.card1');
card.forEach((event)=>{
    event.addEventListener('mouseenter', () => {
        // Animate the card on hover using GSAP
        gsap.to(event, { scale: 1.1, duration: 0.3 });
      });
    
      // Add event listener for mouseleave (hover out)
      event.addEventListener('mouseleave', () => {
        // Animate the card when the mouse leaves using GSAP
        gsap.to(event, { scale: 1, duration: 0.3 });
      });
    
})
  // Add event listener for mouseenter (hover)




