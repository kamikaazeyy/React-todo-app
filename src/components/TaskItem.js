import React, { Component } from 'react'

export default class TaskItem extends Component {
  constructor(props){
      super(props);
      this.state={
          task: this.props.taskItem.task,
          isEditting: false,
      }
  }
  setEditiingState=(isEditting)=>{
      this.setState({isEditting:isEditting});
  }
  toggleTask=()=>{
     this.props.toggleTask(this.props.id) 
  }
    deleteTask =()=>{
        this.props.deleteTask(this.props.id);
    }
    handleChange=(event)=>{
     this.setState({task: event.target.value})
    }
     handleSubmit=(event)=>{
     event.preventDefault();
     this.props.editTask(this.props.id, this.state.task);
     this.setState({isEditting: false})
    }
    render() {
        return (
            <tr>
                {this.state.isEditting?
                <>
                <td>
                    <form onSubmit={this.handleSubmit}>
                       <input value={this.state.task}
                       onChange={this.handleChange}
                       autoFocus/>
                       
                    </form>
                </td>
                <td>
                    <button  className="save" onClick={this.handleSubmit}type="submit">Save</button>
                    <button  className="back" onClick={()=>this.setEditiingState(false)} type="button">Back</button>
                </td>
                </>
                :
                <>
                 <td onClick={this.toggleTask}>
                     <input type="radio" readOnly checked={this.props.taskItem.isCompleted}/>
                     <span className={this.props.taskItem.isCompleted?'completed':'not-completed'}>{this.props.taskItem.task}</span>
                   
                   </td> 
                   <td>
                       <button className="edit" onClick={()=> this.setEditiingState(true)}>Edit</button>
                       <button className="delete" onClick={this.deleteTask}>Delete</button>

                   </td>
                </>}
                
              
            </tr>
        )
    }
}
