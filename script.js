// modal view logic
const backdrop = document.getElementById('backdrop');

function showModal() {
    backdrop.style.display = 'flex';
}

function hideModal() {
    backdrop.style.display = 'none';
}


// cta listeners
document.querySelectorAll('.cta-button').forEach( button => { 
    button.addEventListener("click", showModal);
});

// close button listener
document.querySelector('#modal-close-btn').addEventListener( "click", hideModal);
