import { withTheme } from "styled-components"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ContactUsTitle, CustomInput, CustomTextArea, HalfWidthArea } from "./styles";
import { PrimaryButton } from "../CustomButtons";

const ContactForm = () => {
  return (
    <div style={{padding: '30px', width: '100%'}}>
      <ContactUsTitle>Contact Us!</ContactUsTitle>
      <div style={{maxWidth:'200px'}}><h3>Our work reflects your brand and works.</h3></div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Campo Requerido';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Email Inválido';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (

          <Form>
            <HalfWidthArea>
              <div>
                <Field as={CustomInput} type="text" name="first-name" placeholder="First Name"/>
                  {/* <ErrorMessage name="email" component="div" /> */}
              </div>
              <div>
                <Field as={CustomInput} type="text" name="last-name" placeholder="Last Name"/>
                <ErrorMessage name="password" component="div" />
              </div>
            </HalfWidthArea>
            <Field as={CustomInput} type="email" name="email" placeholder="Email"/>
            <Field as={CustomInput} type="text" name="company-name" placeholder="Company Name"/>
            <Field as={CustomInput} type="text" name="website" placeholder="Website URL"/>
            <Field as={CustomTextArea} name="how-can-help" placeholder="How can we help?"/>
            <div style={{float:'right'}}>
              <PrimaryButton width="200px" type="submit" disabled={isSubmitting}>
                Submit
              </PrimaryButton>
            </div>
          </Form>

        )}
      </Formik>
    </div>
  )
}

export default withTheme(ContactForm)
