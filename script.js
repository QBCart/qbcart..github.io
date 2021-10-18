// modal view logic
const backdrop = document.getElementById("backdrop");

// cta modal
function showCtaModal() {
  backdrop.style.display = "flex";
  document.getElementById("cta-modal").style.display = "block";
}

function hideCtaModal() {
  backdrop.style.display = "none";
  document.getElementById("error-message").style.display = "none";
  document.getElementById("cta-modal").style.display = "none";
}

// res ok modal

function showResOkModal() {
  backdrop.style.display = "flex";
  document.getElementById("res-ok-modal").style.display = "block";
}

function hideResOkModal() {
  backdrop.style.display = "none";
  document.getElementById("res-ok-modal").style.display = "none";
}

// modal dynamic input logic
const inputWrappers = document.querySelectorAll(".modal-input-wrapper");
const inputLabels = document.querySelectorAll(".modal-input-label");
const inputFields = document.querySelectorAll(".modal-input-field");

// redirect focus from label to input on click
inputLabels.forEach((label) => {
  label.addEventListener("click", () => label.nextElementSibling.focus());
});

inputFields.forEach((field) => {
  field.addEventListener("change", () => {
    if (field.value) {
      field.classList.add("field-focused");
      field.previousElementSibling.classList.add("label-focused");
    } else {
      field.classList.remove("field-focused");
      field.previousElementSibling.classList.remove("label-focused");
    }
  });
});

// cta listeners
document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("click", showCtaModal);
  // button.addEventListener("click", ()=>alert('Sorry, demo is not available at this time. Please try again, later.'));
});

// close button listeners
document
  .querySelector("#cta-modal-close-btn")
  .addEventListener("click", hideCtaModal);
document
  .querySelector("#res-ok-modal-close-btn")
  .addEventListener("click", hideResOkModal);

// cta form submit logic

const ctaForm = document.querySelector("#cta-form");

async function submitForm(e) {
  e.preventDefault();

  const formData = {};
  new FormData(ctaForm).forEach((value, key) => (formData[key] = value));
  

  try {
    const response = await fetch(
      "https://landing-page-api.azurewebsites.net/api/demo",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      ctaForm.reset()
      inputFields.forEach((field) => {
        field.classList.remove("field-focused");
        field.previousElementSibling.classList.remove("label-focused");
      });
      hideCtaModal();
      showResOkModal();
    } else {
      document.getElementById("error-message").innerHTML = await response.text()
      document.getElementById("error-message").style.display = "block";
    }
  } catch (error) {

    document.getElementById("error-message").innerHTML = `Sorry, we're having difficulty reaching our server.
      <br />Please check your network connection and try again. 
      <br />If this problem persists, try again later, or contact our support team.`
    document.getElementById("error-message").style.display = "block";
  }
}

ctaForm.onsubmit = submitForm;

// // testimonial slider

// const testimonials = document.querySelectorAll(".testimonial");

// let countIndex = 0;

// function incrementCount() {
//   if (countIndex < testimonials.length - 1) {
//     countIndex++;
//   } else {
//     countIndex = 0;
//   }

//   testimonials[countIndex].classList.remove("testimonial-hidden");
//   testimonials[countIndex].classList.add("testimonial-shown");

//   if (countIndex > 0) {
//     testimonials[countIndex - 1].classList.remove("testimonial-shown");
//     testimonials[countIndex - 1].classList.add("testimonial-hidden");
//   } else {
//     testimonials[testimonials.length - 1].classList.remove("testimonial-shown");
//     testimonials[testimonials.length - 1].classList.add("testimonial-hidden");
//   }
// }

// setInterval(incrementCount, 5000);
