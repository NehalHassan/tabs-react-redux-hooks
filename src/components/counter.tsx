import React from 'react';
import { useDispatch } from 'react-redux';
import {changeTabCount} from '../actions/index';

interface CounterProps {
    countNum: number;
    tabId: string
}
const Counter: React.FC<CounterProps> = ({ countNum, tabId }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(changeTabCount({id:tabId, isIncremental: false}))}>dec</button>
                <span style={{padding: '0 12px'}}>count: {countNum}</span>
            <button onClick={() => dispatch(changeTabCount({id:tabId, isIncremental: true}))}>inc</button>
        </div>
    )
}

export {Counter}