import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import { animated, useSprings } from 'react-spring';

import DeviceModal from './DeviceModal';

const { Content } = Card;

const Stats = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const props = useSprings(
    data.length,
    data.map(({ value, name }) => ({
      from: { value: 0 },
      value,
      name,
    }))
  );

  const handleCardClick = (name) => {
    setSelectedDevice(name);
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DeviceModal
        open={open}
        onClose={handleModalClose}
        data={`Stores with problems in ${selectedDevice}`}
      />
      <Card.Group itemsPerRow={data.length}>
        {props.map(({ name, value }, index) => (
          <Card
            raised
            key={index}
            link
            onClick={() => handleCardClick(name.value)}
          >
            <Content header={name.value} className="card-header" />
            <Content className="card-content">
              <animated.p>
                {value.interpolate((val) => Math.floor(val))}
              </animated.p>
            </Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
};

export default Stats;
