import React from 'react';
import {Button} from 'reactstrap';

import {redir} from '../actions';

export default class Login extends React.Component {
  redirToYggio () {
    redir();
  }
  render () {
    return (
      <div className="blue_container">
        <Button
          color='success'
          onClick={this.redirToYggio} >
            Login
        </Button>
      </div>
    );
  }
};
