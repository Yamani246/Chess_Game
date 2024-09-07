import './Board.css'
import Label from './label';
import Pieces from '../Pieces/Pieces'
import { useReducer } from 'react';
import { useAppContext } from '../../context/Context';
const { Files, Ranks } = Label;


const Board = () => {

    const {appState} = useAppContext()
    const position = appState.position[appState.position.length-1]
    const candidateMoves = appState.candidateMoves
    const ranks = Array(8).fill().map((x,i) => 8-i)
    const files= Array(8).fill().map((x,i)=>i+1)

    const getClassName = (i,j) =>{
        let c='tile'
        c+=(i+j)%2 ===0 ? ' tile--dark' : ' tile--light'
        if (candidateMoves?.find(m=> m[0]===i && m[1]===j)){
            if (position[i][j]){
                c+=' attacking'
            }
            else{
                c+=' highlight'
            }

        }
        return c
    }
    const onDragOver = (e) => {
        e.preventDefault()
    }
    return(
        <div className='container'>
            <Ranks ranks={ranks}/>
            <div className='border'>
            <div className='board' 
            onDragOver={onDragOver}>
            
                <div className='tiles'>
                    {ranks.map((rank,i)=>
                        files.map((file,j)=>
                            <div key={file+'='+rank} onDragOver={onDragOver} className={getClassName(7-i,j)}></div>
                        )
                    )}
                </div>
                
                </div>
                <Pieces/>
            </div>
            <Files files={files}/> 
            
        </div>
    )
}

export default Board