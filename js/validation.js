let inputs = document.querySelectorAll("input");
let btn = document.querySelector("button");
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

    if (input.className === "valid") {
      let validInput = document.querySelectorAll("input.valid").length;
      console.log(validInput);
      if (validInput === 5) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    }
  });
});

btn.addEventListener("click", e => {
  e.preventDefault();
});
