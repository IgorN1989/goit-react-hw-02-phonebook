import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number, date, InferType } from 'yup';

import { ContactFormContainer } from './ContactForm.styled';

const contactSchema = object({
  name: string().required(),
  number: string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label htmlFor="number">
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
