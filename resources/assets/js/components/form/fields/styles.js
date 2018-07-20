import styled from 'styled-components';

export const Input = styled.input`
  background: #EEE;
  padding: 5px;
  color: #666;
  display: block;
  width: 100%;
  border: 1px solid #EEE;
  
  &:active, &:focus {
    outline: 1px solid #1c7430;
    border-color: #2ca02c;
  }
`;

export const Label = styled.label`
  color: #666;
  margin-bottom: 5px;
  display: block;
`;

export const Container = styled.div`
  
`;

export const SubmitButton = styled.button`
  border: none;
  background: #2a2a2a;
  color: #1c7430;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  outline: none;
  padding: 10px 20px;
  font-size: 18px;
`;