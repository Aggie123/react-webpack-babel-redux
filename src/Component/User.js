import React,{Component} from 'react'

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.params.id
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({id: nextProps.params.id});
  }

  render() {
    return <div>
      <p>user:{this.state.id}</p>
    </div>
  }
}