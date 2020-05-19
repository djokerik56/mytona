import React from 'react'
import { Form } from 'react-bootstrap'

const FormControls = (Element, asLabel) => ({ input, meta, type, placeholder, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <>
            <Element
                type={type}
                placeholder={placeholder}
                {...props}
                {...input}
                as={asLabel}
                component = {asLabel}
            />
            {hasError && <Form.Text className='error-message'>{meta.error}</Form.Text>}
        </>
    )
}
export const Input = FormControls(Form.Control)

export const Checkbox = FormControls(Form.Check)

export const Textarea = FormControls(Form.Control, 'textarea')

export const Select = FormControls(Form.Control, 'select')