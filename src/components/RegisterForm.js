import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { customInput, customSelect, discounts } from './fields'
import { required, maxLength, minLength, matchesPassword, asyncValidate } from '../validation'
import capitalize from 'capitalize'
import './RegisterForm.css'

class RegisterForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="firstname"
                    component={customInput}
                    type="text"
                    label="First Name"
                    validate={[required]}
                    normalize={capitalize}
                />
                <Field
                    name="surname"
                    component={customInput}
                    type="text"
                    label="Surname"
                    validate={[required]}
                    normalize={capitalize}
                />
                <Field
                    name="username"
                    component={customInput}
                    type="text"
                    label="User Name"
                    validate={[required, maxLength, minLength]}
                />
                <Field
                    name="password"
                    component={customInput}
                    type="password"
                    label="Password"
                    validate={[required]}
                />
                <Field
                    name="conformPassword"
                    component={customInput}
                    type="password"
                    label="Confirm Password"
                    validate={[required, matchesPassword]}
                />
                <Field
                    name="preference"
                    component={customSelect}
                    label="Preferred Formatting"
                />
                <Field
                    name="newsletter"
                    component={customInput}
                    type="checkbox"
                    label="Sign up to newsletter"
                />
                <FieldArray
                    name="discountCodes"
                    component={discounts}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

RegisterForm = reduxForm({
    form: 'register',
    asyncValidate,
    asyncBlurFields : ['username']
})(RegisterForm)
export default RegisterForm