import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 20px 20px;
`;

const StyledPlayerButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 20px 20px;
  align-items: center;
  position: relative;
  display: flex;
  border-radius: 10px;
  font-size: 18px;
`;

const PlayerButton = ({ gameState, selectAction }) => (
  <StyledDiv>
    <StyledPlayerButton type="button" onClick={selectAction}>
      {(() => {
        if (gameState === 1) {
          // Jugando
          return `Comenzar de nuevo`.toUpperCase();
        } else if (gameState === 2) {
          // Finalizado
          return `Reiniciar`.toUpperCase();
        } else if (gameState === 3) {
          // Finalizado
          return `¡Desempatar!`.toUpperCase();
        }
      })()}
    </StyledPlayerButton>
  </StyledDiv>
);

export default PlayerButton;
