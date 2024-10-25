import arbiter from "../../arbiter/arbiter"
import { useAppContext } from "../../context/Context"
import { generateCadidateMoves } from "../../reducer/actions/move"
const Piece = ({rank,file,piece}) => {

    const {appState , dispatch} = useAppContext()
    const {turn,position} =appState
    const currentPosition = position[position.length-1]
    const prePosition = position[position.length-2]
    
    const onDragStart = (e) => {
        e.dataTransfer.effectAllowed='move'
        e.dataTransfer.setData('text/plain',`${piece},${rank},${file}`)
        setTimeout(()=>{
        e.target.style.display = 'none'
        },0) 
        if (turn === piece.split('_')[1]){
            const candidateMoves =arbiter.getValidMoves({position:currentPosition,prePosition:prePosition,rank,file,piece})
            dispatch(generateCadidateMoves(candidateMoves))
        }
    }

    const onDragEnd = (e) => {
        e.target.style.display = 'block'
    }
    
    return (
        <div className={`piece ${piece} p-${file}${rank}`}
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        >

        </div>
    )
}
export default Piece