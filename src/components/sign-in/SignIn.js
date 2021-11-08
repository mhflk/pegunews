import React, { useRef, useState } from 'react';

import {
  Form,
  Title,
  Input,
  Label,
  Error,
  Button,
  Option,
  OptionButton,
} from '../shared/styledFormItems';

export default function SignIn({
  email,
  setEmail,
  password,
  setPassword,
  switchModals,
  handleLogin,
  show,
}) {
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef();

  // update button state on any change
  function checkFormValidity(e) {
    setIsValid(formRef.current.checkValidity());
  }

  // to run for the first time when inputs are blurred
  // or when inputs change after errors have been shown
  function updateFormErrors(e) {
    const { name, validationMessage } = e.target;
    // update the form errors object with the validationMessage of blurred input
    setFormErrors({
      ...formErrors,
      [name]: validationMessage,
    });
  }

  // to run whenever inputs on the form change
  function handleChange(e) {
    const { name, value } = e.target;
    // adjust error message if one has already been shown
    formErrors[name] && updateFormErrors(e);
    // update form values
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }
  return (
    <Form onSubmit={handleLogin} $how={show} onChange={checkFormValidity} ref={formRef} noValidate>
      <Title>Sign in</Title>
      <Label htmlFor="signinemail">Email</Label>
      <Input
        placeholder="Enter your email"
        type="email"
        name="email"
        id="signinemail"
        required
        value={email}
        onChange={handleChange}
        onBlur={updateFormErrors}
      />
      <Error bottom="12px">{formErrors.email}</Error>
      <Label htmlFor="signinpassword">Password</Label>
      <Input
        placeholder="Enter your password"
        type="password"
        name="password"
        id="signinpassword"
        required
        value={password}
        onChange={handleChange}
        onBlur={updateFormErrors}
      />
      <Error bottom="12px">{formErrors.password}</Error>
      <Button disabled={!isValid} type="submit">
        Sign in
      </Button>
      <Option>
        Or
        <OptionButton onClick={() => switchModals('signup')} type="button">
          Sign up
        </OptionButton>
      </Option>
    </Form>
  );
}
