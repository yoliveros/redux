import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form'
import CustomInput from './customInput'

const validate = values => {
	const errors = {}
	if (!values.name)
		errors.name = 'Campo obligatorio'

	if (!values.lastName)
		errors.lastName = 'Campo obligatorio'

	return errors
}

class UserForm extends Component {
	render() {
		const { handleSubmit } = this.props
		console.log(this.props)
		return (
			<form onSubmit={handleSubmit}>
				<Field name='name' component={CustomInput} placeholder='Name' title='Name' />
				<Field name='lastName' component={CustomInput} placeholder='Last Name' title='Last Name' />
				<input type="submit" value="Enviar" />
			</form>
		)
	}
}

export default reduxForm({
	form: 'user',
	validate,
})(UserForm)