import { Status } from '../../../constants.jsx';
import { useAppContext }from '../../../contexts/Context.jsx'
import { setupNewGame } from '../../../reducer/actions/game.jsx';
import './GameEnds.css'

const GameEnds = ({onClosePopup}) => {

    const { appState : {status} , dispatch } = useAppContext();
    
    if (status === Status.ongoing || status === Status.promoting)
        return null

    const newGame = () => {
        dispatch(setupNewGame())
    }

    const isWin = status.endsWith('wins')

    return <div className="popup--inner popup--inner__center">
        <h1>{isWin ? status : 'Draw'}</h1>
        <p>{!isWin && status}</p>
        <div className={`${status}`}/>
        <button onClick={newGame}>New Game</button>
    </div>
   
}

export default GameEnds