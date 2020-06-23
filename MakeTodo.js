import React from 'react';
class MakeTodo extends React.Component {
  constructor(){
     super();
     this.state = {
       data: ['Scrum'],
       completeData:[],
       taskname:'',
       index:1,
       completeIndex:0
     }
     this.delete1 = this.delete1.bind(this);
     this.handleChange=this.handleChange.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
     this.complete=this.complete.bind(this);
     this.edit=this.edit.bind(this);
  }
  edit(editTodo)
  {
    document.getElementById("entertodo").value=editTodo;
    this.delete1(editTodo);
  }
  handleChange(event){
    this.setState({taskname : event.target.value,index:this.state.index+1});
    
    }
  handleSubmit(){
       this.state.data[this.state.index]=this.state.taskname;
      this.setState({data:this.state.data});
    }
  delete1(deletedata){
     this.setState(prevState => ({
         data: prevState.data.filter(el => el != deletedata )
     }));
  }
  complete(datatocomplete)
  {
    this.setState({completeIndex:this.state.completeIndex+1});
    this.state.completeData[this.state.completeIndex]=datatocomplete;
    this.setState({completeData: this.state.completeData});
    this.delete1(datatocomplete);
  }
  
  render(){
     return(
       <div>
          <div>
              <p>
              <input id="entertodo" type="text" onChange={this.handleChange}></input>
              <button onClick={this.handleSubmit}>Add Task</button>
              </p>
              <Child 
                data={this.state.data} 
                delete1={this.delete1} 
                complete={this.complete}
                edit={this.edit}
              />
          </div>
          <div>
            {this.state.completeData.map((data)=><p>{data}</p>)}
          </div> 
          </div>
     );
  }
}

class Child extends React.Component{

  delete1(id){
      this.props.delete1(id);
  }
  complete(completedata)
  {
    this.props.complete(completedata);
  }
  edit(editTodo){
    this.props.edit(editTodo);
  }
  render(){
     return(
        <div>
          {
             this.props.data.map(el=>
                 <div>{el} 
                    <button onClick={this.delete1.bind(this, el)}>Delete</button>
                    <button onClick={this.complete.bind(this,el)}>Complete</button>
                    <button onClick={this.edit.bind(this,el)}>edit</button> 
                 </div>
             )
          }
        </div>
     )
  }
}
export default MakeTodo;