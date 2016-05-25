import React,{Component} from 'react'
import {Link} from 'react-router'

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {id: 1, name: 'user1'},
        {id: 2, name: 'user2'}
      ]
    };
  }

  render() {
    return (
        <div>
          <h1>Users</h1>
          <div className="master">
            <ul>
              {/* 在应用中用 Link 去链接路由 */}
              {this.state.users.map(user => (
                  <li key={user.id}><Link to={`/customers/customer/${user.id}`}>{user.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="detail">
            {this.props.children}
          </div>
        </div>
    )
  }
}