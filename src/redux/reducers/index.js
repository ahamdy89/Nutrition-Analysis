import * as actionTypes from '../actions/actionTypes';

export const set_ingredients = (state=[], action) => {
    switch (action.type) {
        case actionTypes.SET_INGREDIENTS:
            return action.payload
    
        default:
            return state;
    }
}

export const set_analyzed_results = (state={}, action) => {
    switch (action.type) {
        case actionTypes.SET_ANALYZED_RESULTS:
            return action.payload
    
        default:
            return state;
    }
}