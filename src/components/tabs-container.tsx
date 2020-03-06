import React from 'react';
import { useDispatch } from 'react-redux';

import {addNewTab} from '../actions/index';
import {PageContent} from './page-content';

const TabsContianer = () => {
    const dispatch = useDispatch();

    return (
        <div style={{display: 'flex', flexFlow: 'row'}}>
            <aside style={{minWidth: '240px'}}>
                <p onClick={() => dispatch(addNewTab('tab 1'))}>Add Tab 1</p>
                <p onClick={() => dispatch(addNewTab('tab 2'))}>Add Tab 2</p>
            </aside>
            <div>
                <PageContent/>
            </div>
      </div>
    )
}

export {TabsContianer}