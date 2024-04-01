document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelectorAll('.btn');
    let profile = document.querySelectorAll('.profile');
    let nm= document.querySelectorAll('.ptext')
    
    // Retrieve the username from local storage
    let username = localStorage.getItem('username');
    
    if (username !== null) {
        btn.forEach((bt) => {
            bt.classList.add('hide');
        });
        profile.forEach((pf) => {
            pf.classList.remove('hide');
        });
        nm.forEach((nmm)=>{
            nmm.innerText = username;
        });
    } else {
        btn.forEach((bt) => {
            bt.classList.remove('hide');
        });
        profile.forEach((pf) => {
            pf.classList.add('hide');
        });
    }

})
