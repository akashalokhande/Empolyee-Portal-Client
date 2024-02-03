function FormValidation(input) {
  const error = {};

  const valid_name = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  const valid_email =
    /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const valid_mobile = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  const valid_designation = /^[a-zA-Z]+$/;
  const valid_password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  
  if (input.password === "") {
    error.password = "Password is requried";
  } else if (!valid_password.test(input.password)){
      error.password="Minimum eight characters, at least one letter, one number and one special character"
  }

  if (input.designation === "") {
    error.designation = "designation is requried";
  } else if (!valid_designation.test(input.designation)) {
    error.designation = "Please enter valid designation";
  }

  if (input.age === "") {
    error.age = "age is requried";
  } else if (input.age < 18 || input.age > 60) {
    error.age = "Please enter valid age working";
  }

  if (input.Phone === "") {
    error.Phone = "Phone is requried";
  } else if (!valid_mobile.test(input.Phone)) {
    error.Phone = "Please enter valid mobile Number";
  }

  if (input.name === "") {
    error.name = "Name is requried";
  } else if (!valid_name.test(input.name)) {
    error.name = "each name should first letter is alphabet";
  }

  if (input.Email === "") {
    error.Email = "Email is requried";
  } else if (!valid_email.test(input.Email)) {
    error.Email = "Please enter valid email";
  }

  return error;
}

export default FormValidation;
