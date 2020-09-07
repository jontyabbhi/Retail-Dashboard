import React from 'react';
import { Popup, Label, List } from 'semantic-ui-react';

const { Header, Content } = Popup;
const { Item } = List;

const OmsStatus = () => {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>OMS Status</h3>
      <div className="oms-section">
        <div className="first-row">
          <div>
            <span>N</span>
          </div>
        </div>
        <div className="second-row">
          <div>
            <span>W</span>
          </div>
          <div></div>
          <div>
            <span>E</span>
          </div>
        </div>
        <div className="third-row">
          <Popup
            trigger={
              <div>
                <span>S</span>
              </div>
            }
            position="right center"
          >
            <Header>Impacted stores</Header>
            <Content>
              <List>
                <Item>
                  <Label>217-Kingston On Thames</Label>
                </Item>
                <Item>
                  <Label>241-Putney</Label>
                </Item>
                <Item>
                  <Label>358-Chiswick</Label>
                </Item>
              </List>
            </Content>
          </Popup>
        </div>
      </div>
    </>
  );
};

export default OmsStatus;
