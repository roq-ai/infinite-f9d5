import * as yup from 'yup';

export const consultationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  doctor_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
