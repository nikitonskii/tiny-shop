export const config = [
  {
    name: "firstName",
    type: "text",
    label: "First name",
    required: true,
    placeholder: "your name",
  },
  {
    name: "secondName",
    type: "text",
    label: "Second name",
    required: false,
    placeholder: "your second name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    placeholder: "email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    required: true,
    placeholder: "password",
    passwordType: true,
  },
  {
    name: "repeatedPassword",
    type: "password",
    label: "Repeat Password",
    required: true,
    placeholder: "repeat password",
    passwordType: true,
  },
];
