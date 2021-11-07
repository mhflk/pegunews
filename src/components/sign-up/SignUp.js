import React from 'react';

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

export default function SignUp({
  email,
  setEmail,
  password,
  setPassword,
  switchModals,
  userName,
  setUserName,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Sign up</Title>
      <Label for="email">Email</Label>
      <Input
        placeholder="Enter your email"
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Error bottom="12px"></Error>
      <Label for="password">Password</Label>
      <Input
        placeholder="Enter your password"
        type="password"
        name="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Error bottom="12px"></Error>
      <Label for="username">Name</Label>
      <Input
        placeholder="Enter your name"
        type="text"
        name="username"
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Error bottom="12px"></Error>
      <Button disabled={false} type="submit">
        Sign up
      </Button>
      <Option>
        Or
        <OptionButton onClick={switchModals} type="button">
          Sign in
        </OptionButton>
      </Option>
    </Form>
  );
}
