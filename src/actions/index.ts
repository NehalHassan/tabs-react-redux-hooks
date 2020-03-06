import { actionTypes } from './types';
import {  v1 as uuidv1 } from 'uuid';

export const addNewTab = (payload: string) => {
    return {
        type: actionTypes.AddNewTab,
        payload: {
            name: payload,
            id: uuidv1()
        }
    };
};

export const changeTabCount = (payload: {}) => {
    return {
        type: actionTypes.ChangeTabCount,
        payload
    };
};
