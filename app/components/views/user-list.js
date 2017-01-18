import React from 'react';
import { Link } from 'react-router';
var classNames = require("classnames");
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import {bootstrap-table} from 'bootstrap-table';
// import {TableHeaderColumn} from 'react-bootstrap';

// Using "Stateless Functional Components"
export default function(props) {
  console.log("user-list:");
  console.log(props);
  var nameBtnClass ="";
  var data="";
  if( props  && props.users && props.users.length){
    nameBtnClass=classNames({
    'glyphicon': true,
    'glyphicon-menu-down': ((props.sort.field == "name") && (props.sort.dir == "asc")) || (props.sort.field != "name"),
    'glyphicon-menu-up': (props.sort.field == "name") && (props.sort.dir == "desc")
    });
    data=(
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Photo</th>
              <th data-target="name" data-sort-order={(props.sort.field=="name")?props.sort.dir:"asc"} onClick={props.myClick}>
               Name<span data-target="name" data-sort-order={(props.sort.field=="name")?props.sort.dir:"asc"} className={nameBtnClass} aria-hidden="true">
                  </span></th>
              <th data-target="name" data-sort-order={(props.sort.field=="")?props.sort.dir:"asc"} onClick={props.myClick}>Email</th>
              <th>Number of scans</th>
              <th>Last seen time</th>
              { /*<th>Actions</th>*/}
            </tr>
            </thead>
            <tbody>
            {props.users.map(user => {

              return (
                <tr key={user.id}>
                  <td><img src={user.photo?user.photo:'../../../images/avatar.jpg'} alt={user.name}/></td>
                  <td>
                    <Link to={'/users/' + user.id}>{user.name}</Link>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={'/user/' + user.id}>{user.scans}</Link>
                  </td>
                  <td>{user.lastSeen}</td>
                  {/*}<td><button onClick={props.deleteUser.bind(null, user.id)} className="btn btn-danger">Delete</button></td>*/}
                </tr>
              );

            })}
            </tbody>
          </table>
   );
  }
  return (
    <div className="data-list">
      <button style={{float:'right'}}>Add</button>
      {data}
    </div>
  );
}
