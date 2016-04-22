import React,{Component} from 'react'
export default class Content extends Component {

  render() {
    const data = [{_id: 1}, {_id: 2}, {_id: 3}];
    return <div>
      <p>hello app 1</p>
      <p>{data[0]._id}</p>
      {data.map((item,index)=><p>{item._id}</p>)}
    </div>
  }
};