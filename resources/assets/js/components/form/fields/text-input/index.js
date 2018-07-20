import React from 'react';
import {Input, Label} from '../styles';
import {Container} from './styles';

export default class TextInput extends React.Component {
  render(){
    const {input: {onChange, onBlur}, meta: {active}, label} = this.props;

    return (
      <Container>
        <Label>{label}</Label>
        <Input
          onChange={onChange}
          onBlur={onBlur} />
      </Container>
    );
  }
}