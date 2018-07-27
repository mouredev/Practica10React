export const GAME_SET = 'GAME/SET';
export const GAME_SET_PLAYER_BOARD = 'GAME/SET_PLAYER_BOARD';
export const GAME_SET_STATE = 'GAME/SET_STATE';

export const gameSet = payload => ({
  type: GAME_SET,
  payload,
});

export const gameSetPlayerBoard = ({ player, board }) => ({
  type: GAME_SET_PLAYER_BOARD,
  payload: {
    player: player,
    board: board,
  },
});

export const gameSetState = payload => ({
  type: GAME_SET_STATE,
  payload,
});
