export const VALIDATIONS = {
  services: {
    required: 'Choose at least one service',
  },
  budget: {
    required: 'Choose your budget',
  },
  brandName: {
    required: 'Brand name is required',
  },
  industry: {
    required: 'Please select an industry',
  },
  website: {
    optional: 'This field is required',
  },
  description: {
    required: 'Please write a short description of your project',
  },
  other: {
    optional: 'This field is required',
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
    optional: 'This field is required',
    pattern: {
      value: /^\s*(?:\+?(\d{2,3}))?[-. (]*(\d{2,3})[-. )]*(\d{3})[-. ]*(\d{3})\s*$/gm,
      message: 'The phone number is not valid',
    },
  },
}
