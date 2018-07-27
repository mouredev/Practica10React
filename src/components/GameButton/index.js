import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import circle from '../../images/circle.png';
import cross from '../../images/cross.png';

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 0;
  height: 100px;
  width: 100px;
  &:focus {
    outline: 0;
  }
`;

const StyledImage = styled.img`
  background-repeat: no-repeat;
  height: 80px;
  width: 80px;
  border: 0;
`;

const GameButton = ({ id, gameState, selectBox, selectedPlayer }) => (
  <StyledButton
    id={id}
    type="button"
    onClick={selectBox}
    disabled={selectedPlayer === 1 || selectedPlayer === 2 ? true : false}
  >
    {(() => {
      if (selectedPlayer === 1) {
        return <StyledImage src={circle} />;
      } else if (selectedPlayer === 2) {
        return <StyledImage src={cross} />;
      } else {
        return null;
      }
    })()}
  </StyledButton>
);

GameButton.defaultProps = {
  player: null,
};

GameButton.propTypes = {
  gameState: PropTypes.number,
};

export default GameButton;
