import React,{Component} from 'react';
import Todoitems from './component/todoitems/Todoitems';
import AddItem from './component/Additem/Additem';
class App extends Component{
 
  state ={
    items:[
      {id:1,task:"study", time:40},
      {id:2,task:"training", time:20},
      {id:3,task:"reading", time:30}
    ]
  }
 
  deleteItem = (id)=>{
     let items =this.state.items;
     let i =items.findIndex(item => item.id===id)
     items.splice(i,1);
     this.setState({items})
  }
 Additem = (item)=>{
  item.id= Math.random(); 
  let items = this.state.items;
  items.push(item);
    this.setState({items})

 }

  render(){
     return (
    <div className="App container">
      <h1 className='text-center'>Todo List</h1>
      <Todoitems items={this.state.items} deleteitem= {this.deleteItem}/>
      <AddItem addItem={this.Additem}/>
      </div>
  );
  }
}


export default App;
