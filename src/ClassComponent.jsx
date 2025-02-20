import { Component } from "react";

class ClassComponent extends Component{
    constructor(){
        super()
        this.state={myname:'Anushka'}
    }
    render(){
        return(
        <div>
                <h1>{this.state.myname}'s Class Component</h1> 
        </div>
        );
    }
}
export default ClassComponent;