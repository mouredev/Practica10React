import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo_white.png';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  /*justify-content: space-between;*/
  padding: 20px 10px;
  align-items: center;
  position: relative;
`;

const StyledImg = styled.img`
  display: inline-block;
  width: 60px;
  height: 60px;
  padding: 10px;
`;

const StyledH1 = styled.h1`
  font-size: 20px;
`;

const StyledH2 = styled.h2`
  font-size: 16px;
`;

const Header = () => (
  <StyledHeader>
    <StyledImg src={logo} alt="" />
    <div>
      <StyledH1>{'3 en Raya: Práctica Rect Boot VI'.toUpperCase()}</StyledH1>
      <StyledH2>{'Por Brais moure'.toUpperCase()}</StyledH2>
    </div>
  </StyledHeader>
);

export default Header;
