import React from 'react';
import styled from 'styled-components';

const StyledPlayerText = styled.div`
  font-size: 24px;
  color: #fff;
  display: flex;
  padding: 20px 20px;
  align-items: center;
  position: relative;
`;

const PlayerText = ({ gameState, player }) => (
  <StyledPlayerText>
    {(() => {
      if (gameState === 1) {
        // Jugando
        return `Turno del jugador ${player}`.toUpperCase();
      } else if (gameState === 2) {
        // Finalizado
        return `Ha ganado el jugador ${player}`.toUpperCase();
      } else if (gameState === 3) {
        // Finalizado
        return `¡Vaya! Se ha producido un empate`.toUpperCase();
      }
    })()}
  </StyledPlayerText>
);

export default PlayerText;
