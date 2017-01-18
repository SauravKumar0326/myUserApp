import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import * as userApi from '../../api/user-api';
import UserLogin from '../views/user-login';

const UserLoginContainer = React.createClass({
  login: function(event) {
    event.preventDefault();
    let emailId = this.refs.child.getInputEmail();
    let password = this.refs.child.getInputPassword();

    //check for authentication
    if (emailId === "saurav@mobiliya.com" && password === "P@ssw0rd") {
    this.context.router.replace('/users');
    }
  },

  render: function() {
    return (
      <UserLogin login={this.login} ref="child" />
    );
  }

});
UserLoginContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default UserLoginContainer;
