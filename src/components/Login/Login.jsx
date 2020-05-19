import React from 'react'
import { Container } from 'react-bootstrap'
import LoginForm from '../common/FormControls/LoginForm'
import { Redirect } from 'react-router-dom'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/'} />
    } 
    return (
        <Container style={{ maxWidth: '500px' }}>
            <h1 className='text-center'>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </Container>
    )
}

export default Login
