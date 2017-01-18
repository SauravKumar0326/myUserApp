import React from 'react';
import { Link } from 'react-router';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

const UserLogin = React.createClass({
  getInputEmail: function() {
    console.log(this.refs.inputEmail.value);
    return this.refs.inputEmail.value;
  },
  getInputPassword:function(){
    return this.refs.inputPassword.value
  },

  render: function() {
    return (
      <div className="home-page">
        <Grid>
          <Row>
            <Col className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
              <form onSubmit={this.props.login} className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" ref="inputEmail" required />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref="inputPassword" required/>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>
                  <button className="btn btn-lg btn-primary btn-block">Sign in</button>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

export default UserLogin;
