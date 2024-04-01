document.addEventListener('DOMContentLoaded',()=>{
    

    let menu = document.querySelector('.menu')
    
    //navbar
    menu.addEventListener('click',()=>{
        let menu = document.getElementById('menu');
        let closeButton = document.querySelector('.close-button');
    
        menu.classList.toggle('opacity-100');
        menu.classList.toggle('top-0');
        menu.classList.toggle('-top-[400px]');
        
        // Delay showing the close button
        setTimeout(function() {
            closeButton.style.display = 'block';
        }, 500);
    })
    let closeButton = document.querySelector('.close-button');
 closeButton.addEventListener('click',()=>{
    let menu = document.getElementById('menu');
    menu.classList.remove('opacity-100');
    menu.classList.remove('top-0');
    menu.classList.add('-top-[400px]');
    
    // Hide close button
    closeButton.style.display = closeButton.style.display === 'block' ? 'none' : 'block';

 })  
})