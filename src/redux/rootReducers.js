import {combineReducers} from 'redux';
import { set_ingredients, set_analyzed_results } from './reducers';

const rootReducer = combineReducers({
    ingredients: set_ingredients,
    analayzedResults: set_analyzed_results
})

export default rootReducer;