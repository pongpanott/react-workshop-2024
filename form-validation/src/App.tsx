import {
	Box,
	Button,
	colors,
	FormControl,
	FormHelperText,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import { useState } from 'react';
import { countryList } from './country';
import FormRow from './FormRow';
import FormSection from './FormSection';

type ErrorProps = {
	error: boolean;
	message: string | undefined;
};

const defaultErrors = {
	firstname: { error: false, message: '' },
	lastname: { error: false, message: '' },
	street: { error: false, message: '' },
	number: { error: false, message: '' },
	city: { error: false, message: '' },
	state: { error: false, message: '' },
	country: { error: false, message: '' },
	phoneNo: { error: false, message: '' },
};

function App() {
	const [formValues, setFormValues] = useState<{
		[key: string]: string;
	}>({
		firstname: '',
		lastname: '',
		number: '',
		street: '',
		city: '',
		state: '',
		country: '',
		phoneNo: '',
	});
	const [errors, setErrors] = useState<{
		firstname: ErrorProps;
		lastname: ErrorProps;
		street: ErrorProps;
		number: ErrorProps;
		city: ErrorProps;
		state: ErrorProps;
		country: ErrorProps;
		phoneNo: ErrorProps;
	}>(defaultErrors);

	const validationSchema = {
		requiredStiring: (value: string) => value === '',
		phonePattern: (value: string) => !/^0[869]0-\d{3}-\d{4}$/.test(value),
	};

	const handleUpdateFormvalue = (name: string, value: string) => {
		setFormValues((prev) => ({ ...prev, [name]: value }));
		validateField(name, value);
	};

	const getFieldError = (name: string, value: string) => {
		let error = false;
		let message = '';

		switch (name) {
			case 'firstname':
				error = validationSchema.requiredStiring(value);
				message = error ? 'First name is required' : '';
				break;
			case 'lastname':
				error = validationSchema.requiredStiring(value);
				message = error ? 'Last name is required' : '';
				break;
			case 'street':
				error = validationSchema.requiredStiring(value);
				message = error ? 'Street name is required' : '';
				break;
			case 'number':
				error = validationSchema.requiredStiring(value);
				message = error ? 'Number is required' : '';
				break;
			case 'city':
				error = validationSchema.requiredStiring(value);
				message = error ? 'City is required' : '';
				break;
			case 'state':
				error = validationSchema.requiredStiring(value);
				message = error ? 'State is required' : '';
				break;
			case 'country':
				error = validationSchema.requiredStiring(value);
				message = error ? 'Country is required' : '';
				break;
			case 'phoneNo':
				error =
					validationSchema.requiredStiring(value) ||
					validationSchema.phonePattern(value);
				message = validationSchema.requiredStiring(value)
					? 'Phone number is required'
					: validationSchema.phonePattern(value)
					? 'Invalid phone number'
					: '';
				break;
			default:
				break;
		}

		return { error, message };
	};

	const validateField = (name: string, value: string) => {
		const { error, message } = getFieldError(name, value);

		setErrors((prev) => ({
			...prev,
			[name]: {
				error,
				message: error ? message : undefined,
			},
		}));
	};

	const validateForm = (event: React.FormEvent) => {
		event.preventDefault();

		let errors = defaultErrors;

		const fields = [
			'firstname',
			'lastname',
			'street',
			'number',
			'city',
			'state',
			'country',
			'phoneNo',
			'acceptTnC',
		];

		fields.forEach((field) => {
			const { error, message } = getFieldError(field, formValues[field]);
			if (error) {
				errors = {
					...errors,
					[field]: { error, message },
				};
			}
		});

		if (Object.values(errors).some((error) => error.error)) {
			setErrors(errors);
		} else {
			alert(JSON.stringify(formValues, null, 2));
		}
	};

	return (
		<Box sx={{ width: 800, margin: 'auto', height: 600 }} padding={8}>
			<form
				style={{ display: 'flex', flexDirection: 'column', gap: 48 }}
				onSubmit={validateForm}
			>
				<FormSection title="Name">
					<FormRow>
						<TextField
							value={formValues.firstname}
							label="First Name"
							placeholder="Enter your first name"
							onChange={(e) =>
								handleUpdateFormvalue('firstname', e.target.value)
							}
							inputProps={
								{
									// pattern: '^[a-zA-Z]+$',
								}
							}
							error={errors.firstname.error}
							helperText={errors.firstname.message}
							fullWidth
						/>
						<TextField
							value={formValues.lastname}
							label="Last Name"
							placeholder="Enter your last name"
							onChange={(e) =>
								handleUpdateFormvalue('lastname', e.target.value)
							}
							inputProps={
								{
									// pattern: '^[a-zA-Z]+$',
								}
							}
							error={errors.lastname.error}
							helperText={errors.lastname.message}
							fullWidth
						/>
					</FormRow>
				</FormSection>

				<FormSection title="Address">
					<FormRow>
						<TextField
							value={formValues.number}
							label="Number"
							placeholder="Number"
							onChange={(e) => handleUpdateFormvalue('number', e.target.value)}
							error={errors.number.error}
							helperText={errors.number.message}
							fullWidth
						/>
						<TextField
							value={formValues.street}
							label="Street"
							placeholder="Street name"
							onChange={(e) => handleUpdateFormvalue('street', e.target.value)}
							error={errors.street.error}
							helperText={errors.street.message}
							fullWidth
						/>
					</FormRow>
					<FormRow>
						<TextField
							value={formValues.city}
							label="City"
							placeholder="City"
							onChange={(e) => handleUpdateFormvalue('city', e.target.value)}
							error={errors.city.error}
							helperText={errors.city.message}
							fullWidth
						/>
						<TextField
							value={formValues.state}
							label="State"
							placeholder="State name"
							onChange={(e) => handleUpdateFormvalue('state', e.target.value)}
							error={errors.state.error}
							helperText={errors.state.message}
							fullWidth
						/>
					</FormRow>
					<FormRow>
						<FormControl fullWidth>
							<Select
								variant="outlined"
								value={formValues.country}
								onChange={(e) =>
									handleUpdateFormvalue('country', e.target.value as string)
								}
								error={errors.country.error}
								displayEmpty
								renderValue={(selected) => {
									if (!selected) {
										return (
											<em
												style={{
													color: errors.country.error
														? colors.red[700]
														: colors.common.black,
												}}
											>
												Select a country
											</em>
										);
									}
									return selected;
								}}
							>
								<MenuItem value="">
									<em>Select a country</em>
								</MenuItem>
								{countryList.map((item) => (
									<MenuItem key={item.value} value={item.value}>
										{item.label}
									</MenuItem>
								))}
							</Select>
							<FormHelperText sx={{ color: colors.red[700] }}>
								{errors.country.message}
							</FormHelperText>
						</FormControl>
					</FormRow>
				</FormSection>

				<FormSection title="Phone Number">
					<TextField
						value={formValues.phoneNo}
						label="Phone Number"
						placeholder="080-XXX-XXXX"
						onChange={(e) => handleUpdateFormvalue('phoneNo', e.target.value)}
						inputProps={{
							pattern: '^080-\\d{3}-\\d{4}$',
							maxLength: 12,
						}}
						error={errors.phoneNo.error}
						helperText={errors.phoneNo.message}
						fullWidth
					/>
				</FormSection>

				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</form>
		</Box>
	);
}

export default App;
