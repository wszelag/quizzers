export const loginFormFieldsData = [
  {
    id: 0,
    title: "Email",
    name: "email",
    type: "email",
    placeholder: "joedoe@gmail.com",
    options: {
      required: true
    }
  },
  {
    id: 1,
    title: "Password",
    name: "password",
    type: "password",
    placeholder: "******",
    options: {
      required: true,
      minLength: 6
    }
  }
];

export const registrationFormFieldsData = [
  {
    id: 0,
    title: "Name",
    name: "name",
    type: "text",
    placeholder: "Joe Doe",
    options: {
      required: true,
      maxLength: 10
    }
  },
  {
    id: 1,
    title: "Email",
    name: "email",
    type: "email",
    placeholder: "joedoe@gmail.com",
    options: {
      required: true
    }
  },
  {
    id: 2,
    title: "Password",
    name: "password",
    type: "password",
    placeholder: "******",
    options: {
      required: true,
      minLength: 6
    }
  },
  {
    id: 3,
    title: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "******",
    options: {
      required: true
    }
  }
];
