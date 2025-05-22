import React from 'react'

class Userclass extends React.Component  {
    constructor(props){
        console.log("child constructor has been completed")
        super(props)
    this.state={
        count:0,
        count2:1,
    }
}  
componentDidMount(){
    console.log("child component has been completed")
}
    render(){
        console.log("child render has been completed")
    const{name}=this.props
    const{count,count2}=this.state
   return (
    <div>
        <h2>count:{count}</h2>
        <h2>count2:{count2}</h2>
        <button onClick={()=>{
            //we should update the state variables directly 
            this.setState({
                count:this.state.count+1,
                count2:this.state.count2+1,
            })
        }}>CountButton</button>
      <h2>{name} </h2>
      <h2>Second</h2>
    </div>
  )
}
}

export default Userclass
