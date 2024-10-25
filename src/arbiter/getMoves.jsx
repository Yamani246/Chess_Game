export const getRookMove = ({ position, rank, file, piece }) => {
    const moves = []
    const us = piece.split('_')[1]
    const enemy = us === 'w' ? 'b' : 'w'
    const direction = [[0, -1], [0, 1], [1, 0], [-1, 0]]
    direction.forEach(dir => {
        for (let i = 1; i < 8; i++) {
            const x = rank + i * dir[0]
            const y = file + i * dir[1]

            if (position?.[x]?.[y] === undefined) {
                break
            }
            if (position[x][y].endsWith(enemy)) {
                moves.push([x, y])
                break
            }
            if (position[x][y].endsWith(us)) {
                break
            }
            moves.push([x, y])
        }
    })
    return moves
}
export const getKnightMove = ({ position, rank, file, piece }) => {
    const moves = []
    const enemy = piece.endsWith('w') ? 'b' : 'w'

    const candidates = [
        [-2,-1],
        [-2,1],
        [-1,-2],
        [-1,2],
        [1,-2],
        [1,2],
        [2,-1],
        [2,1],
    ]
    candidates.forEach(c => {
        const cell = position?.[rank+c[0]]?.[file+c[1]]
        if(cell !== undefined && (cell.endsWith(enemy) || cell === '')){
            moves.push ([rank+c[0],file+c[1]])
        }
    })
    return moves

}
export const getBishopMove = ({ position, rank, file, piece }) => {
    const moves = []
    const us = piece.split('_')[1]
    const enemy = us === 'w' ? 'b' : 'w'
    const direction = [
        [-1,-1],
        [-1,1],
        [1,-1],
        [1,1],
    ]
    direction.forEach(dir => {
        for (let i = 1; i < 8; i++) {
            const x = rank + i * dir[0]
            const y = file + i * dir[1]

            if (position?.[x]?.[y] === undefined) {
                break
            }
            if (position[x][y].endsWith(enemy)) {
                moves.push([x, y])
                break
            }
            if (position[x][y].endsWith(us)) {
                break
            }
            moves.push([x, y])
        }
    })
    return moves
}

export const getQueenMove = ({position,rank,file,piece}) =>{
    const moves=[
        ...getBishopMove({position,rank,file,piece}),
        ...getRookMove({position,rank,file,piece})]
    return moves
}

export const getKingMove = ({position,rank,file,piece}) =>{
    const moves = []
    const enemy = piece.endsWith('w') ? 'b' : 'w'

    const candidates = [
        [1,1],[0,1],[1,0],[-1,-1],[-1,0],[0,-1],[-1,1],[1,-1]
    ]
    candidates.forEach(c => {
        const cell = position?.[rank+c[0]]?.[file+c[1]]
        if(cell !== undefined && (cell.endsWith(enemy) || cell === '')){
            moves.push ([rank+c[0],file+c[1]])
        }
    })
    return moves

}
export const getPawnMove = ({position,rank,file,piece}) =>{
    const moves = []
    const dir = piece.endsWith('w') ? 1 : -1
    if (rank%5===1){
        if (!position?.[rank+dir]?.[file] && !position?.[rank+2*dir]?.[file]){
            moves.push([rank+2*dir,file])
        }
    }
    if (!position?.[rank+dir]?.[file]){
        moves.push([rank+dir,file])
    }
    
    return moves

}
export const getPawnCaptureMove = ({position,prePosition,rank,file,piece}) =>{
    const moves = []
    const dir = piece.endsWith('w') ? 1 : -1
    const enemy = piece.endsWith('w') ? 'b' : 'w'

    if(position?.[rank+dir]?.[file-1] && position[rank+dir][file-1].endsWith(enemy)){
        moves.push([rank+dir,file-1])
    }
    
    if(position?.[rank+dir]?.[file+1] && position[rank+dir][file+1].endsWith(enemy)){
        moves.push([rank+dir,file+1])
    }

    const enemyPawn= dir === 1 ? 'p_b' : 'p_w'
    const adjacent = [file-1,file+1]
    if (prePosition){
        if ((dir === 1 && rank===4)||(dir===-1 && rank ===3)){
            adjacent.forEach(f => {
                if(position?.[rank]?.[f] === enemyPawn && 
                    position?.[rank+dir+dir]?.[f] === '' &&
                    prePosition?.[rank]?.[f] === '' && 
                    prePosition?.[rank+dir+dir]?.[f] === enemyPawn
                ){
                    moves.push([rank+dir,f])
                }
            })
        }
    }

    return moves

}