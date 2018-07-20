import React, { Component } from 'react';
import {Container, RegisterForm} from './styles';

import {Field, Form} from 'react-final-form';
import {TextInput, PasswordInput, SubmitButton} from '../../components/form/fields';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onSubmit.bind(this);
  }

  onSubmit({username}) {

  }

  render() {
    return (
      <Container>
        <h2>Register</h2>
        <p>Enter your details below:</p>

        <Form onSubmit={this.onSubmit}>
          {({handleSubmit}) => (
            <RegisterForm onSubmit={handleSubmit}>
              <Field name="name" component={TextInput} label="Name" />
              <Field name="email" component={TextInput} label="Email" />
              <Field name="username" component={TextInput} label="Nickname" />

              <Field name="password" component={PasswordInput}/>
              <SubmitButton>Register!</SubmitButton>
            </RegisterForm>
          )}
        </Form>
      </Container>
    );
  }
}

