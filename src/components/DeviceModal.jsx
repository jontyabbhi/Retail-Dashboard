import React, { useState } from 'react';
import { Modal, Button, Table, Icon } from 'semantic-ui-react';
import { useEffect } from 'react';
import axios from 'axios';


const { Header, Content, Actions } = Modal;
const { Row, HeaderCell, Header: TableHeader, Cell, Body } = Table;


const DeviceModal = ({ open, onClose, data }) => {

  
 
  
  return (
    <Modal dimmer="inverted" open={open} onClose={onClose} closeIcon>
      <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        {data}
        <span>
          <Icon name="mail" style={{ cursor: 'pointer' }} />
          <Icon name="download" style={{ cursor: 'pointer' }} />
        </span>
      </Header>
      <Content>
        <Table color="blue" celled>
          <TableHeader>
            <Row>
              <HeaderCell>Area</HeaderCell>
              <HeaderCell>Store</HeaderCell>
              <HeaderCell>IP</HeaderCell>
            </Row>
          </TableHeader>
          <Body>
            <Row>
              <Cell>Area 22</Cell>
              <Cell>543-New Malden</Cell>
              <Cell>xxx.xxx.xxx.xxx</Cell>
            </Row>
            <Row>
              <Cell>Area 22</Cell>
              <Cell>535-Balham</Cell>
              <Cell>xxx.xxx.xxx.xxx</Cell>
            </Row>
          </Body>
        </Table>
      </Content>
      <Actions>
        <Button>Log a Ticket</Button>
        <Button onClick={onClose}>Close</Button>
      </Actions>
    </Modal>
  );
};



export default DeviceModal;
