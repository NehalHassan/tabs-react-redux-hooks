import { actionTypes } from '../actions/types';
import { ActionAdd, ChangeTabCount } from './types';

type Actions = ActionAdd | ChangeTabCount;


export const initialState: any = {};

const tabs = (state = initialState, action: Actions) => {
    switch (action.type) {
        case actionTypes.AddNewTab:
            return {
                ...state,
                tabs: {
                    ...state.tabs,
                    [action.payload.id]: {
                        count: 0,
                        name: action.payload.name,
                        id: action.payload.id
                    }
                }
            };
        case actionTypes.ChangeTabCount:
            let count = state.tabs[action.payload.id].count;

            if(action.payload.isIncremental) {
                count += 1
            } else {
                count -=1
            }

            return {
                ...state,
                tabs: {
                    ...state.tabs,
                    [action.payload.id]: {
                        ...state.tabs[action.payload.id],
                        count
                    }
                }
            }
        default: {
            return state;
        }
    }
};

export { tabs }