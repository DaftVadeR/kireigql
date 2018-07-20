import React from 'react';
import {Input, Label} from '../styles';
import {Container} from './styles';

export default class PasswordInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [
        "",
        ""
      ]
    };

    this.onChange.bind(this);
    this.onChangeSeparate.bind(this);
  }

  onChange(values){
    const {onChange} = this.props;
    const uniques = values.filter((val, index, self) => self.indexOf(val) === index);

    if(uniques.length === 1)
      onChange(uniques[0]);
    else
      onChange("");
  };

  onChangeSeparate(index) {
    return e => {
      const {values} = this.state;

      values[index] = e.target.value;

      this.setState({
        values
      });

      this.onChange(values);
    }
  };

  render(){
    const {input: {onBlur}, meta: {active}} = this.props;
    const {values} = this.state;

    return (
      <Container>
        <Label>Password</Label>
        <Input
          value={values[0]}
          onChange={this.onChangeSeparate(0)}
          onBlur={onBlur} />

        <Label>Confirm password</Label>
        <Input
          value={values[1]}
          onChange={this.onChangeSeparate(1)}
          onBlur={onBlur} />
      </Container>
    );
  }
}