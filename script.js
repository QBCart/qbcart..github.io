// modal view logic
const backdrop = document.getElementById('backdrop');

function showModal() {
    backdrop.style.display = 'flex';
}

function hideModal() {
    backdrop.style.display = 'none';
}

// modal dynamic input logic
const inputWrappers = document.querySelectorAll('.modal-input-wrapper');
const inputLabels = document.querySelectorAll('.modal-input-label');
const inputFields = document.querySelectorAll('.modal-input-field');

// redirect focus from label to input on click
inputLabels.forEach( label => { 
    label.addEventListener("click", () => label.nextElementSibling.focus());
});

inputFields.forEach( field => {
    field.addEventListener("change", () => {
        if (field.value) {
            field.classList.add('field-focused');
            field.previousElementSibling.classList.add('label-focused');
        } else {
            field.classList.remove('field-focused');
            field.previousElementSibling.classList.remove('label-focused');
        }
    })
})



// cta listeners
document.querySelectorAll('.cta-button').forEach( button => { 
    button.addEventListener("click", showModal);
});

// close button listener
document.querySelector('#modal-close-btn').addEventListener( "click", hideModal);

// submit button logic
document.querySelector('#cta-form').addEventListener( "submit", (e) => 
{ 
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(JSON.stringify(data))
    

    // const response = await fetch(url, {
    //     method: 'POST', 
    //     mode: 'cors',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: JSON.stringify(data) // body data type must match "Content-Type" header
    // });
    // const json = await response.json(); // parses JSON response into native JavaScript objects
});

// testimonial slider

const testimonials = document.querySelectorAll('.testimonial');

let countIndex = 0;

function incrementCount() {
    
    if (countIndex < testimonials.length - 1) {
        countIndex++
    } else {
        countIndex = 0
    };
    
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
