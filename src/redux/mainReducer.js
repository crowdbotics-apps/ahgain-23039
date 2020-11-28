import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2179468Reducer from '../features/SignIn2179468/redux/reducers'
import SignIn2179454Reducer from '../features/SignIn2179454/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2179468: SignIn2179468Reducer,
SignIn2179454: SignIn2179454Reducer,

});