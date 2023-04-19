import React from 'react';

import {subscribe, unsubscribe} from '../actions';
import SubscribeButton from './SubscribeButton';

export default class DeviceList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {devices: props.devices};
  }
  sub = async device => {
    await subscribe(device);
    device.subscribed = true;
    this.setState({devices: this.state.devices});
  }
  unsub = async device => {
    await unsubscribe(device);
    device.subscribed = false;
    this.setState({devices: this.state.devices});
  }
  makeList = () => {
    return this.props.devices.map((item, idx) => {
      return (
        <li className="deviceLi" key={idx}>
          <span>{item.name}</span>
          {item.subscribed ? (
            <SubscribeButton
              color='danger'
              device={item}
              method={this.unsub}>
                Unsubscribe
            </SubscribeButton>
          ) : (
            <SubscribeButton
              color='success'
              device={item}
              method={this.sub}>
                Subscribe
            </SubscribeButton>
          )}
        </li>
      );
    })
  }

  render () {
    return (
      <ul className="deviceUl">
        {this.makeList()}
      </ul>
    );
  }
};
