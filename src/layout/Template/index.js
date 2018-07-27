import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import Header from '../Header';
import Body from '../Body';

// eslint-disable-next-line
injectGlobal`
  ${normalize()};
`;

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Template = ({ children }) => (
  <StyledWrapper>
    <Header />
    <Body>{children}</Body>
  </StyledWrapper>
);

Template.propTypes = {
  ...Header.propTypes,
  ...Body.propTypes,
};

export default Template;
