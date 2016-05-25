import React,{Component} from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router'

export default class app extends Component {

  render() {
    const data = [{_id: 1}, {_id: 2}, {_id: 3}];
    return <div>
      <p>hello app 1</p>
      <p>{data[0]._id}</p>
      {data.map((item, index)=><p>{item._id}</p>)}
      <ul>
        <li><Link to={{pathname:'/about'}}>about</Link></li>
        <li><Link to={{pathname:'/customers'}}>customers</Link></li>
      </ul>
      <div>
        {this.props.children}
      </div>
    </div>
  }
};