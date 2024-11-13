import {getBishopMove, getKingMove, getKnightMove, getPawnCaptureMove, getPawnMove, getQueenMove, getRookMove} from './getMoves'
import { movePawn, movePiece } from './moves'

const arbiter = {
    getRegularMoves : function ({position,rank,file,piece}){
        if (piece.startsWith('r')){
        return getRookMove({position,rank,file,piece})
        }
        if (piece.startsWith('n')){
        return getKnightMove({position,rank,file,piece})
        }
        if (piece.startsWith('b')){
        return getBishopMove({position,rank,file,piece})
        }
        if (piece.startsWith('q')){
        return getQueenMove({position,rank,file,piece})
        }
        if (piece.startsWith('k')){
        return getKingMove({position,rank,file,piece})
        }
        if (piece.startsWith('p')){
        return getPawnMove({position,rank,file,piece})
        }
    },
    getValidMoves : function({position,prePosition,rank,file,piece}){
        let moves = this.getRegularMoves({position,rank,file,piece})
        if (piece.startsWith('p')){
           moves=[
             ...moves,
            ...getPawnCaptureMove({position,prePosition,rank,file,piece})
           ]
        }
        return moves
    },
    performMove : function({position,piece,rank,file,x,y}){
        if(piece.startsWith('p')){
            return movePawn({position,piece,rank,file,x,y})
        }
        else{
            return movePiece({position,piece,rank,file,x,y})
        }
    }
}

export default arbiter

