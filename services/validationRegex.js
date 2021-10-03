emailReg = () => {
  return /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm;
};

passwordReg = () => {
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;
};

nameReg = () => {
  return /^.{2,}$/;
};

//first parameter is keyboard value second is input type in string
validate = (value, type) => {
  switch (type) {
    case "email":
      return !emailReg().test(value) ? { emailError: true } : { emailError: false };
      break;
    case "password":
      return !passwordReg().test(value) ? { passwordError: true } : { passwordError: false };
      break;
    case "name":
      return !nameReg().test(value) ? { nameError: true } : { nameError: false };
      break;

    default:
      return "";
      break;
  }
};

const validation = {
  emailReg: emailReg,
  passwordReg: passwordReg,
  validate: validate,
};

module.exports = validation;
