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

// testimonial slider

const testimonials = document.querySelectorAll('.testimonial');

let countIndex = 0;

function incrementCount() {
    
    if (countIndex < testimonials.length - 1) {
        countIndex++
    } else {
        countIndex = 0
    };
    console.log(countIndex)
    console.log(testimonials.length - 1)
    
    testimonials[countIndex].classList.remove('testimonial-hidden');
    testimonials[countIndex].classList.add('testimonial-shown');
    
    if (countIndex > 0) {
        testimonials[countIndex - 1].classList.remove('testimonial-shown');
        testimonials[countIndex - 1].classList.add('testimonial-hidden');
    } else {
        testimonials[testimonials.length - 1].classList.remove('testimonial-shown');
        testimonials[testimonials.length - 1].classList.add('testimonial-hidden');
    }
};

setInterval(incrementCount, 5000);
