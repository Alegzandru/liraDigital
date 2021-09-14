export const VALIDATIONS = {
  services: {
    required: 'Choose at least one service',
  },
  budget: {
    required: 'Choose your budget',
  },
  description: {
    required: 'Please write a short description of your project',
  },
  name: {
    required: 'This field is required',
    maxLength: {
      value: 50,
      message: 'Name should not exceed 50 characters',
    },
    pattern: {
      value: /^[a-zA-Z ]*$/i,
      message: 'Name should only contain letters and spaces',
    },
  },
  email: {
    required: 'This field is required',
    pattern: {
      value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i,
      message: 'Your email is not valid',
    },
  },
  company: {
    required: 'This field is required',
  },
  phone: {
    required: 'This field is required',
    pattern: {
      value: /^\s*(?:\+?(\d{2,3}))?[-. (]*(\d{2,3})[-. )]*(\d{3})[-. ]*(\d{3})\s*$/gm,
      message: 'The phone number is not valid',
    },
  },
}
