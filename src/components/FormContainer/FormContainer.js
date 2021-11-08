import React from 'react';
import PropTypes from 'prop-types';
import { FormWrapper } from './FormContainer.styled';

function FormContainer({ children }) {
  return <FormWrapper>{children}</FormWrapper>;
}

FormContainer.propTypes = {
  children: PropTypes.node,
};

export default FormContainer;
