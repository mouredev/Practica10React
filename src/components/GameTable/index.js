import React from 'react';
import styled from 'styled-components';
import GameButton from '../GameButton';

const StyledTable = styled.table`
  border-collapse: collapse;
  border-style: hidden;
`;

const StyledTd = styled.td`
  border: 10px solid ${({ theme }) => theme.colors.secondary};
`;

let counter = 0;
let buttonCounter = 0;

const GameTable = ({ gameState, selectBox, board }) => (
  <StyledTable>
    <tbody>
      {[...Array(3)].map(f => {
        if (counter >= 12) {
          counter = 0;
        }
        if (buttonCounter >= 9) {
          buttonCounter = 0;
        }
        counter += 1;
        return (
          <tr key={counter}>
            {[...Array(3)].map(c => {
              counter += 1;
              buttonCounter += 1;
              return (
                <StyledTd key={counter}>
                  <GameButton
                    id={buttonCounter}
                    key={buttonCounter}
                    gameState={gameState}
                    selectBox={selectBox}
                    selectedPlayer={board[buttonCounter - 1]}
                  />
                </StyledTd>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </StyledTable>
);

export default GameTable;
