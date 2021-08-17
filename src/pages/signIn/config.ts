export const config = [
  {
    name: 'email',
    type: 'email',
    label: 'Email *',
    isError: true,
    isRequired: true,
    placeholder: 'email',
    errorText: 'this field must be filled',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password *',
    isError: true,
    isRequired: true,
    placeholder: 'password',
    errorText: 'this field must be filled',
    passwordType: true,
  },
]