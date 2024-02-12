import { emailRegex } from "../helpers/regex";

const registerValidationOnSubmit = (value) => {
    let errors = {};
    const email = value?.email;
    const password = value?.password;
    // Validate email
    if (!email || email === undefined) {
        errors.email = "Email is required";
    }
    // Validate password
    if (!password || password === undefined) {
        errors.password = "Password is required";
    }
    return errors;

};

const registerValidationOnChange = (name, value, errorMessages) => {

    const errors = { ...errorMessages }
    switch (name) {
        case "email":
            if (value === "" || value === undefined || value === null) {
                errors.email = "email is required"
            } else if (!emailRegex.test(value)) {
                errors.email = "Please Enter Valid Email"
            } else {
                delete errors.email
            }
            break;
        case "password":
            if (value === "" || value === undefined || value === null) {
                errors.password = "password is required"
            } else {
                delete errors.password
            }
            break;
        default:
        // code block
    }
    return errors;
}

export { registerValidationOnSubmit, registerValidationOnChange }