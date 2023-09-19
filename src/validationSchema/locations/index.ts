import * as yup from 'yup';

export const locationValidationSchema = yup.object().shape({
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  state: yup.string().nullable(),
  zip_code: yup.string().nullable(),
  car_id: yup.string().nullable().required(),
});
