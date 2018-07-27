import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;

const Body = ({ children }) => <StyledBody>{children}</StyledBody>;

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
