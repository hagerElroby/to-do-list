import React from "react";
const Todoitems =(props) =>{
      const {items ,deleteitem}=props;
      let length=items.length;
      const Listitems= length ?(
            items.map(item =>{
                  return(
                        <div key={ item.id}>
                             <span className="task">{item.task}</span>
                             <span className="time">{item.time}</span>
                              <span  className="action icon" onClick={() =>deleteitem(item.id)} >&times;</span>
                        </div>
                  )
            })

      ):(
        <p>There is no items</p>
      )
 
      return(
            <div className="listitem">
                  <div>
                        <span className="title task">Task</span>
                        <span  className="title time">Time</span>
                        <span className="title action">Action</span>
                  </div>
                 {Listitems}
            </div>
      )
}
export default Todoitems;