import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onNameChange }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function buttonHandler() {
        setIsEditing(isEditing ? false : true)
        if (isEditing) {
            onNameChange(symbol, playerName)
        }
    }

    function handleChange(event) {
        console.log(event.target)
        setPlayerName(event.target.value)
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? <input type="text" value={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={buttonHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}