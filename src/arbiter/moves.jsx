import { copyPosition } from "../helper"

export const movePiece = ({position,piece,rank,file,x,y})=>{
    const newposition = copyPosition(position)
    newposition[rank][file]=''
    newposition[x][y]=piece 
    return newposition
}

export const movePawn = ({position,piece,rank,file,x,y})=> {
    const newposition= copyPosition(position)
    if (!newposition[x][y] && x!==rank && y!== file)
        newposition[rank][y] = ''
    newposition[rank][file]=''
    newposition[x][y] = piece
    return newposition
}