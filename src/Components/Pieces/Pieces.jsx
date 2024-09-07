import React, { useRef, useState } from 'react';
import Piece from './Piece';
import './Pieces.css';
import { copyPosition, createPosition } from '../../helper';
import { useAppContext } from '../../context/Context';
import { clearCandidateMoves, makeNewMove } from '../../reducer/actions/move';

const Pieces = () => {
    const ref = useRef()
    const { appState, dispatch } = useAppContext()
    const candidateMoves=appState.candidateMoves
    const currentPosition = appState.position[appState.position.length - 1]
    const calculate = (e) => {
        const { width, left, top } = ref.current.getBoundingClientRect()
        const size = width / 8
        const y = Math.floor((e.clientX - left) / size)
        const x = 7 - Math.floor((e.clientY - top) / size)
        return { x, y }
    }
    const onDrop = (e) => {
        const newPositon = copyPosition(currentPosition)
        const { x, y } = calculate(e)
        const [piece, rank, file] = e.dataTransfer.getData('text').split(',')
        if (candidateMoves?.find(m => m[0] === x && m[1] === y)) {
            newPositon[rank][file] = ''
            newPositon[x][y] = piece
            dispatch(makeNewMove(newPositon))
        }
        dispatch(clearCandidateMoves())

    }
    const onDragOver = (e) => {
        e.preventDefault()
    }
    return (
        <div className='pieces'
            ref={ref}
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            {currentPosition.map((r, rank) =>
                r.map((f, file) =>
                    currentPosition[rank][file] ?
                        <Piece key={rank + '-' + file} rank={rank} file={file} piece={currentPosition[rank][file]} />
                        : null
                ))}
        </div>
    )

}

export default Pieces