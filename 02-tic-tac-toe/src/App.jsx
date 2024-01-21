import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import GameOver from "./components/GameOver"
import { WINNING_COMBINATIONS } from "./winning-combinations"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns) {
  let currentActivePLayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentActivePLayer = 'O'
  }
  return currentActivePLayer;
}

function App() {
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'Y': 'Player 2'
  })
  const [gameTurns, setGameTurns] = useState([])
  // const [activePlayer, setActivePlayer] = useState('X')

  const activePlayer = deriveActivePlayer(gameTurns)


  let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }
  let winner
  for (const combination of WINNING_COMBINATIONS) {
    let firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    let secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    let thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol) {
      winner = players[firstSquareSymbol]
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currentActive) => currentActive === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) => {
      const currentActivePLayer = deriveActivePlayer(prevTurns)
      console.log(prevTurns)
      const updatedTurn = [{ square: { row: rowIndex, col: colIndex }, player: currentActivePLayer }, ...prevTurns]
      console.log(updatedTurn)
      return updatedTurn;
    })
  }

  function handleRestart() {
    setGameTurns([])
  }

  function handleNameChange(symbol, newName) {
    setPlayers(prePlayers => {
      return {
        ...prePlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} onNameChange={handleNameChange} />
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} onNameChange={handleNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelect={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
