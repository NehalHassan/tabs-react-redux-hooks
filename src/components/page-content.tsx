import React from 'react';
import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Counter } from './counter';
import 'react-tabs/style/react-tabs.css';

interface TabInterface {
    id: string;
    count: number;
    name: string;
}
const PageContent = () => {
    const {tabs} = useSelector((state: any) => state.tabs);

    if (!tabs) {
        return null
    }
    const tabsArray: TabInterface[] = Object.values(tabs) ?? []

    const renderTab = () => {
        return tabsArray.map(
            (tab: TabInterface) => (<Tab key={tab.id}>{tab.name}</Tab>)
        )
    }

    const renderTabPanel = () => {
        return tabsArray.map(
            (tab: TabInterface) => (
                <TabPanel key={tab.id} style={{padding: '24px'}}>
                    <Counter countNum={tab.count} tabId={tab.id}/>
                </TabPanel>
            )
        )
    }

    return (
        <Tabs>
            <TabList>
                {renderTab()}
            </TabList>

            {renderTabPanel()}

        </Tabs>
    )
}

export { PageContent }