import 'react-dyn-tabs/style/react-dyn-tabs.css';
import 'react-dyn-tabs/themes/react-dyn-tabs-card.css';
import useDynTabs from 'react-dyn-tabs';
import View from "./view"

const DynamicQuery = () => {

      //tabs
  const options = {
    tabs: [
      {
        id: '1',
        title: 'tab 1',
        panelComponent: (props) => <View />,
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


    return(
        <div>
                  <button onClick={addTab3}>Add tab 3</button>
      <TabList></TabList>
      <PanelList></PanelList>
        </div>
    )
}

export default DynamicQuery