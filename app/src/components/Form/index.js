import React, { Component } from 'react';
import styled from 'styled-components';
import './style.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tariff: ['one', 'two', 'three']
    }
  }
  render() {
    const { tariff } = this.state;
    return (
      <FormWrapper className="test">
        <FormInit>
          <FormInput />
          <FormInput />
          <FormSelect>
            {tariff ? tariff.map((value, index) => <option key={index}>{value}</option>) : null}
          </FormSelect>
          <FormCalendar />
        </FormInit>
      </FormWrapper>
    )
  }
}

const FormWrapper = styled.div`
  width: 500px;
  height: 500px;
`;
const FormInit = styled.form``;
const FormInput = styled.input``;
const FormSelect = styled.select``;
const FormCalendar = styled.input``;
