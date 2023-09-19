import * as yup from 'yup';

export const billingDetailsValidationSchema = yup.object().shape({
  payment_method: yup.string().nullable(),
  invoice_number: yup.string().nullable(),
});
