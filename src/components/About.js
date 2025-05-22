import Usecomponent from "./Usecomponent"
import Userclass from "./Userclass"
import React from "react";
class  About extends React.Component  {
  constructor(props){
    console.log(" parent constructor has bee completed")
    super(props);
    this.state={
      count:0,
    }
  }
  componentDidMount(){
    console.log(" parent ComponentDidMount has completed")
  }
  render(){
    console.log(" parent Render has been completed")
  return (
    <div>
      <h1>About</h1>
      <Usecomponent name="Vishnu "/>
      <Userclass name=" VishnuVardhan Reddy"/>
    </div>
  )
}
}


export default About
