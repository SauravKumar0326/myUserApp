import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserList from '../views/user-list';
import * as userApi from '../../api/user-api';
import * as userActions from '../../actions/user-actions';
import store from '../../store';
import { loadSearchLayout_ } from '../../actions/search-layout-actions';

const UserListContainer = React.createClass({


  componentDidMount: function() {
    console.log("locAction"+this.props.location.action);
    var locAction = this.props.location.action;
      this.props.fetchUsers();
    },
  render: function() {
    return (
        <UserList users={this.props.users} sort={this.props.sort} myClick={this.props.fetchUsers} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users,
    sort: store.userState.sort
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: bindActionCreators(userActions.fetchUsers, dispatch),
    loadSearchLayout:  bindActionCreators(loadSearchLayout_, dispatch)
    // delteUsers: bindActionCreators(loadSearchLayout_, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
