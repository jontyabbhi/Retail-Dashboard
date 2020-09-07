import React from 'react';
import { Grid } from 'semantic-ui-react';

import Stats from './Stats';
import StoresGauge from './StoresGauge';
import ProblemAgingChart from './ProblemAgingChart';
import StoresWiseChart from './StoresWiseChart';
import DeviceWiseChart from './DeviceWiseChart';
import OfflineStoreGauge from './OfflineStoreGauge';
import OmsStatus from './OmsStatus';
import useStats from '../hooks/useStats';

const { Column, Row } = Grid;

const Dashboard = ({ zoneId, areaId, storeId }) => {
  const statsData = useStats({ zoneId, areaId, storeId });

  return (
    <>
      <Grid>
        <Row>
          <Column width={3} style={{ borderRight: '1px solid #d5d5d7' }}>
            <OmsStatus />
            <OfflineStoreGauge />
          </Column>
          <Column width={13}>
            <h3>Problem Devices</h3>
            <Stats data={statsData} />
            <h3>Stores Impacted</h3>
            <StoresGauge data={statsData} />
            <div className="chart-container">
              <ProblemAgingChart />
              <StoresWiseChart />
              <DeviceWiseChart />
            </div>
          </Column>
        </Row>
      </Grid>
    </>
  );
};

export default Dashboard;
