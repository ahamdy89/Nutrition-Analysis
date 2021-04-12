import * as actionTypes from './actionTypes';


export const setIngredients = ingrs => {
    return {
        type:actionTypes.SET_INGREDIENTS,
        payload: ingrs
    }
}

export const setAnalyzedResults = result => {
    return {
        type:actionTypes.SET_ANALYZED_RESULTS,
        payload: result
    }
}