// modal view logic
const backdrop = document.getElementById('backdrop');

function showCtaModal() {
    backdrop.style.display = 'flex';
}

function hideCtaModal() {
    backdrop.style.display = 'none';
    document.getElementById('catch-error').style.display = 'none';
    document.getElementById('api-error').style.display = 'none';
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
    button.addEventListener("click", showCtaModal);
});

// close button listener
document.querySelector('#modal-close-btn').addEventListener( "click", hideCtaModal);



// cta form submit logic

const ctaForm = document.querySelector('#cta-form');

async function submitForm(e) {

    e.preventDefault();

    try {
        const response = await fetch('https://landing-page-api.azurewebsites.net/api/demo', {
        method: 'POST', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new FormData(ctaForm)
    });

    if (!response.ok) {
        // close the form modal
        hideCtaModal()
        // create modal that confirms & gives further instructions
        console.log(await response.json())
    
    } else {
        document.getElementById('api-error').style.display = 'block';
    }
        
    } catch (error) {
       document.getElementById('catch-error').style.display = 'block';
    }
 
    
}

ctaForm.onsubmit = submitForm;

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
