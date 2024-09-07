import actionTypes from "../actionType";

export const makeNewMove = (newPosition) => {
    return {
        type: actionTypes.NEW_MOVE,
        payload: { newPosition }
    };
};

export const generateCadidateMoves = (candidateMoves) =>{
    return{
        type : actionTypes.GENERATE_CANDIDATE_MOVES,
        payload : {candidateMoves}
    }
}

export const clearCandidateMoves = () =>{
    return{
        type : actionTypes.CLEAR_CANDIDATE_MOVES
    }
}
