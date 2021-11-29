import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer () {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const dropdownOptions = [
    { key: 'Select your hobby', value: '' },
    { key: 'philosophy', value: 'philosophy' },
    { key: 'reading', value: 'reading' },
    { key: 'cricket', value: 'cricket' }
  ]
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    mobileno:"",
    otp:""
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    mobileno: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
    otp:Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, 'Must be exactly 6 digits')
    .max(6, 'Must be exactly 6 digits')
  })
  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormikControl
            control='input'
            type='email'
            label='Email'
            name='email'
            formik={formik}
          />
          <FormikControl
            control='numberinput'
            type='number'
            label='Mobile_Number'
            name='mobileno'
            formik={formik}
          />
          <FormikControl
            control='otp'
            type='number'
            label='Enter_OTP'
            name='otp'
            formik={formik}
          />
          <FormikControl
            control='textarea'
            label='Description'
            name='description'
            formik={formik}
          />
          <FormikControl
            control='select'
            label='Select your hobby'
            name='selectOption'
            options={dropdownOptions}
            formik={formik}
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer