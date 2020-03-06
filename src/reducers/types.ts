import { actionTypes } from '../actions/types';

export interface TabInterface {
    id: number;
    name?: string;
    isIncremental?: boolean;
}

export interface ActionAdd {
    type: actionTypes.AddNewTab,
    payload: TabInterface
}

export interface ChangeTabCount {
    type: actionTypes.ChangeTabCount,
    payload: TabInterface
}

