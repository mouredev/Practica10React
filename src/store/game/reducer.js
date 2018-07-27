import initialState from './initialState';
import { GAME_SET, GAME_SET_PLAYER_BOARD, GAME_SET_STATE } from './actions';

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SET:
      return { ...state, ...payload };
    case GAME_SET_PLAYER_BOARD:
      return { ...state, player: payload.player, board: payload.board };
    case GAME_SET_STATE:
      return { ...state, gameState: payload };
    default:
      return state;
  }
};

export default gameReducer;
