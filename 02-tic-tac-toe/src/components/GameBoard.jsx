
export default function GameBoard({ onSelect, board }) {


    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleChangeSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activeSquare
    //         return updatedBoard
    //     })
    //     onSelect()
    // }

    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}><button onClick={() => onSelect(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button></li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}