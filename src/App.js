import React, { Component } from 'react';


class App extends Component {
  // static defaultProps = {
  //   name: "yyh",
  //   git: "yYoho"
  // }
  /** 首次渲染 */
  constructor(props){
    super(props);
    console.log("Initial render");
    setTimeout(()=>{
      console.log("constructor");
    },1000)
    this.state = {str: "hello"}
  }
  componentWillMount(){
    console.log("componentWillMount");
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  /** 首次渲染 */
  /** 更新 */
  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true
  }
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  /** 更新 */
  setTheState(){
    let s = "hello";
    if(this.state.str === s){
      s = "HELLO"
    }
    this.setState({
      str: s
    })
  }

  forceItUpdate(){
    this.forceUpdate();
  }

  render() {
    console.log("render");
    
    return (
      <div>
        <span>{"Props:"} <h2>{parseInt(this.props.num)}</h2></span> <br/>
        <span>{"State:"} <h2>{this.state.str}</h2></span>
      </div>
      )
  }
}
// App.defaultProps = {
//   name: "yyh",
//   git: "yYoho"
// }

export default App;
