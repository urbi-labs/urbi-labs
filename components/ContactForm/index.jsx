import { withTheme } from "styled-components"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ContactUsTitle, CustomInput, CustomTextArea, HalfWidthArea } from "./styles";
import { PrimaryButton } from "../CustomButtons";

const ContactForm = () => {
	return (
		<div style={{ padding: '30px', width: '100%' }}>
			<ContactUsTitle>Let's get coffee.</ContactUsTitle>
			<p className="h3" style={{ maxWidth: '240px' }}>
				(Or schedule a call, whatever works best for you.)
			</p>
			<Formik
				initialValues={{ firstName: '', lastName: '', email: '', companyName: '', website: '', howCanHelp: '' }}
				onSubmit={async (values) => {
					await new Promise(resolve => setTimeout(resolve, 500));
					console.log(JSON.stringify(values, null, 2));
				}}

			>
				{({ isSubmitting }) => (

					<Form>
						<HalfWidthArea>
							<div>
								<Field as={CustomInput} required type="text" name="firstName" placeholder="First Name" />
							</div>
							<div>
								<Field as={CustomInput} type="text" name="lastName" placeholder="Last Name" />
							</div>
						</HalfWidthArea>
						<Field as={CustomInput} required type="email" name="email" placeholder="Email" />
						<Field as={CustomInput} required type="text" name="companyName" placeholder="Company Name" />
						<Field as={CustomInput} type="text" name="website" placeholder="Website URL" />
						<Field as={CustomTextArea} required name="howCanHelp" placeholder="How can we help?" />
						<div style={{ float: 'right' }}>
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
