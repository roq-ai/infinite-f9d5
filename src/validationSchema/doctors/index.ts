import * as yup from 'yup';

export const doctorValidationSchema = yup.object().shape({
  name: yup.string().required(),
  specialty: yup.string().required(),
  experience: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
