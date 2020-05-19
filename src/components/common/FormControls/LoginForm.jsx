import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form';
import { Input, Checkbox } from './FormControls'
import { required, maxLengthCreator } from './validators';

const maxlenght15 = maxLengthCreator(15)
const maxlenght30 = maxLengthCreator(30)

let LoginForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Field component={Input} type='email' name='email' placeholder='email@mail.com' validate={[required, maxlenght30]}/>
                <Form.Text>EMAIL: admin@mail.com</Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Field component={Input} type='password' name='password' placeholder='Password' validate={[required, maxlenght15]}/>
                <Form.Text>PASSWORD: admin</Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicCheck'>
                <Field component={Checkbox} type='checkbox' name='rememberMe' label='remember me' />
            </Form.Group>
            {props.error && <h3 className='error-message'>{props.error}</h3>}
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    )
}
LoginForm = reduxForm({ form: 'loginform' })(LoginForm)

export default LoginForm