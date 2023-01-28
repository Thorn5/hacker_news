import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './elements/Navbar';
import Landing from './views/Landing';
import FixedQuery from './views/FixedQuery';
import DynamicQuery from './views/DynamicQuery';
import NoPage from './views/NoPage';

// tabs 
import 'react-dyn-tabs/style/react-dyn-tabs.css';
import 'react-dyn-tabs/themes/react-dyn-tabs-card.css';
import useDynTabs from 'react-dyn-tabs';

function App() {

  //tabs
  const options = {
    tabs: [
      {
        id: '1',
        title: 'tab 1',
        panelComponent: (props) => <Landing />,
      },
      {
        id: '2',
        title: 'tab 2',
        panelComponent: (props) => <FixedQuery />,
      },
    ],
    selectedTabID: '1',
  };

  let _instance;
  const [TabList, PanelList, ready] = useDynTabs(options);
  ready((instance) => {
    _instance = instance;
  });
  const addTab3 = function () {
    // open tab 3
    _instance.open({id: '3', title: 'Tab 3', panelComponent: (porps) => <DynamicQuery />}).then(() => {
      console.log('tab 3 is open');
    });
    // switch to tab 3
    _instance.select('3').then(() => {
      console.log('tab 3 is selected');
    });
  };

  // end tabs

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Landing />} />
          <Route path="fixedquery"  element={<FixedQuery />} />
          <Route path="dynamicquery" element={<DynamicQuery />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    <>
      <button onClick={addTab3}>Add tab 3</button>
      <TabList></TabList>
      <PanelList></PanelList>
    </>
    </>
  );
}

export default App;


