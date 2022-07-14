import React ,{Component} from "react";
import "./Additem.css"
class AddItems extends Component{
      state={
            task:"",
            time:""
      }
      handleChange = (e)=>{
            this.setState({
                  [e.target.id]:e.target.value
            })
      }
      handleSubmit = (e)=>{
            e.preventDefault();
            if(e.target.task.value===""&& e.target.time.value===""){
                
                  return false
            }else{
                  this.props.addItem(this.state);
                  this.setState({
                        task:"",
                        time:""
                  })
            }
            
      }
      render(){
            return(
                  <div>
                       <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Enter a task...." id="task" onChange={this.handleChange} value={this.state.task}/>
                        <input type="number" placeholder="Enter a time...." id="time" onChange={this.handleChange} value={this.state.time}/>
                        <input type="submit" value="Add"/>
                       </form>
                  </div>
            )
      }
}
export default AddItems