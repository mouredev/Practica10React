import React, { Component } from 'react';
import Template from '../layout/Template';
import { GameTable, PlayerText, PlayerButton } from '../components';
import { connect } from 'react-redux';
import { gameSet, gameSetPlayerBoard, gameSetState } from '../store';

class App extends Component {
  componentDidMount() {
    const {
      gameSet,
      initialBoard,
      initialPlayer,
      initialGameState,
    } = this.props;
    gameSet({
      board: initialBoard,
      player: initialPlayer,
      gameState: initialGameState,
    });
  }

  constructor(props) {
    super(props);

    this.selectBox = this.selectBox.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.checkDraw = this.checkDraw.bind(this);
    this.selectAction = this.selectAction.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // TODO: Mejorar la lógica de repintado
    return true;
  }

  selectBox(e) {
    if (this.props.gameState !== 1) {
      return;
    }
    const id = e.target.id;
    e.target.disabled = true;
    var currentPlayer = this.props.player;
    var newBoard = this.props.board;
    newBoard[id - 1] = currentPlayer;

    if (this.checkWinner(currentPlayer, newBoard)) {
      // La partida ha finalizado
      this.props.gameSetState(2);
    } else if (this.checkDraw(newBoard)) {
      // Empate
      this.props.gameSetState(3);
    } else {
      // La partida sigue
      var newPlayer = currentPlayer === 1 ? 2 : 1;
      this.props.gameSetPlayerBoard({
        player: newPlayer,
        board: newBoard,
      });
    }
  }

  checkWinner(player, board) {
    if (
      (board[0] === player && board[1] === player && board[2] === player) ||
      (board[3] === player && board[4] === player && board[5] === player) ||
      (board[6] === player && board[7] === player && board[8] === player) ||
      (board[0] === player && board[3] === player && board[6] === player) ||
      (board[1] === player && board[4] === player && board[7] === player) ||
      (board[2] === player && board[5] === player && board[8] === player) ||
      (board[6] === player && board[4] === player && board[2] === player) ||
      (board[0] === player && board[4] === player && board[8] === player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkDraw(board) {
    var draw = true;
    for (let index = 0; index < board.length; index++) {
      const element = board[index];
      if (element === -1) {
        draw = false;
      }
    }
    return draw;
  }

  selectAction(e) {
    this.props.gameSet({ board: Array(9).fill(-1), player: 1, gameState: 1 });
  }

  render() {
    const { player, gameState, board } = this.props;
    return (
      <Template>
        <PlayerText gameState={gameState} player={player} />
        <GameTable
          gameState={gameState}
          selectBox={this.selectBox}
          board={board}
        />
        <PlayerButton gameState={gameState} selectAction={this.selectAction} />
      </Template>
    );
  }
}

const mapStateToProps = state => ({
  initialBoard: state.game.board,
  initialPlayer: state.game.player, // Jugador actual. 1 o 2.
  initialGameState: state.game.gameState, // Estado del juego. 1: Jugando, 2: Finalizado, 3: Empate
  board: state.game.board,
  player: state.game.player, // Jugador actual. 1 o 2.
  gameState: state.game.gameState, // Estado del juego. 1: Jugando, 2: Finalizado, 3: Empate
});

const mapDispatchToProps = {
  gameSet,
  gameSetPlayerBoard,
  gameSetState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
