import React, { useState } from 'react';
import { Tab, Dropdown, Image } from 'semantic-ui-react';

import useLocationHierarchy from '../hooks/useLocationHierarchy';

import Dashboard from './Dashboard';
import FetchData from './FetchData';

import workInProgressImage from '../assets/images/page.png';
//import Fetchdata from './FetchData';

const Home = () => {
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);

  const [areaDropDown, setAreaDropDown] = useState([]);
  const [storeDropDown, setStoreDropDown] = useState([]);

  const { zones, areas, stores } = useLocationHierarchy();

  const allZones = [{ key: -1, text: 'All Zones', value: 0 }];

  const zoneDropDown = zones.map(({ id, name }, index) => ({
    key: index,
    text: name,
    value: id,
  }));

  const handleZoneChange = (event, { value }) => {
    const filteredAreas = areas.filter(({ zoneId }) => zoneId === value);

    const areaDropDown = filteredAreas.map(({ id, name }, index) => ({
      key: index,
      text: name,
      value: id,
    }));

    setSelectedZone(value);
    setSelectedArea(null);
    setSelectedStore(null);
    setAreaDropDown(areaDropDown);
    setStoreDropDown([]);
  };

  const handleAreaChange = (event, { value }) => {
    const filteredStores = stores.filter(
      ({ zoneId, areaId }) => areaId === value && zoneId === selectedZone
    );

    const storeDropDown = filteredStores.map(({ id, name }, index) => ({
      key: index,
      text: `${id}-${name}`,
      value: id,
    }));

    setSelectedArea(value);
    setSelectedStore(null);
    setStoreDropDown(storeDropDown);
  };

  const handleStoreChange = (event, { value }) => {
    setSelectedStore(value);
  };

  const panes = [
    {
      menuItem: 'Dashboard',
      render: () => (
        <Tab.Pane attached={false}>
          <Dashboard
            zoneId={selectedZone}
            areaId={selectedArea}
            storeId={selectedStore}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Report',
      render: () => (
        <Tab.Pane attached={false}>
         {/* <Fetchdata/> */}
          <Image src={workInProgressImage} centered />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <Dropdown
        options={storeDropDown}
        placeholder="Store"
        selection
        className="filter-panel"
        search
        clearable
        onChange={handleStoreChange}
      />
      <Dropdown
        options={areaDropDown}
        selection
        placeholder="Area"
        className="filter-panel"
        search
        clearable
        onChange={handleAreaChange}
      />
      <Dropdown
        options={[...allZones, ...zoneDropDown]}
        selection
        placeholder="Zone"
        className="filter-panel"
        onChange={handleZoneChange}
        additionLabel="All Zones"
      />
      <Tab
        menu={{
          secondary: true,
          className: 'tab-label',
        }}
        panes={panes}
      ></Tab>
    </>
  );
};

export default Home;
