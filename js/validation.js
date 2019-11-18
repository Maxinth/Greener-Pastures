let inputs = document.querySelectorAll("input");
let btn = document.querySelector("button.hide");
let firstBtn = document.querySelector("button.init");
let form = document.querySelector("form");
let firstDiv = document.querySelector("div.one");
// let validInputs = document.querySelectorAll("input").length;

const patterns = {
  telephone: /^\+234[\d]{10}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

// adding an event listener to each input element
inputs.forEach(input => {
  input.addEventListener("keyup", e => {
    validate(e.target, patterns[e.target.attributes.name.value]);

    // after entering data into the fields and they begin to go green and become valid
    if (input.className === "valid") {
      let validInput = document.querySelectorAll("input.valid").length;
      if (validInput === 5) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    }
    /* clicking the button beneath the form, this button only comes into view when all fields become green
     I have included this eventListener inside this inputs.forEach block so as to have access to each input field defined
     as a parameter in the forEach function */
    btn.addEventListener("click", e => {
      e.preventDefault();
      firstDiv.appendChild(feedBack); // add feedback to the first column
      firstDiv.appendChild(refillButton); // add the go again button afterwards
      btn.style.display = "none"; // hide the button
      input.value = ""; // clear ALL the input field
      input.classList.remove("valid"); // take the green borders away
      feedBack.style.display = "block"; // show feedback
      refillButton.style.display = "block"; // show the go Again button
    });
  });
}); // end of forEach block

// clicking the initial button, clicking this makes the form come into view
firstBtn.addEventListener("click", e => {
  e.preventDefault();
  form.style.display = "block"; // show the form
  firstBtn.style.display = "none"; // hide the button
  form.firstElementChild.focus(); //  apply a focus to the first input field upon the first initial click
});

//creating a feedback element
let feedBack = document.createElement("div");
feedBack.classList.add("message");
feedBack.textContent =
  "Thanks for checking this simple form out, That's about it";

// the go Again button
let refillButton = document.createElement("button");
refillButton.textContent = "Go Again";
refillButton.classList.add(".init");

// on clicking the go Again button
refillButton.addEventListener("click", () => {
  form.firstElementChild.focus(); //  apply a focus to the first input field to try again
  refillButton.style.display = "none"; // hide the go Again button
  feedBack.style.display = "none"; // hide the feedback
});
