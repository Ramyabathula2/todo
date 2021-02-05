import React,{Component} from 'react';
export default class App extends Component{
  constructor(){
    super();
    this.state={
      formInputData:"",
      storeData:[]
    }
  }
  storeInputData=(event1)=>{
    this.setState({
      formInputData:event1.target.value
    })
  }
  storeFinalData=()=>{
    this.setState({
      storeData:[...this.state.storeData,this.state.formInputData]
    })
  }
  //delete an item frm array
  deleteStoreData=(event2)=>{
    var tempData=this.state.storeData;
    if(window.confirm("Are you Sure ?")==true){
    tempData.splice(Number(event2.target.id),1)
    this.setState({
      storeData:tempData
    
    })
  }
  }
  render(){
    return(
      <div className="row">
        {/* First col*/}
        <div className="col-lg-5 col-md-10">
        <div className="card mt-3">
          <div className="card-body">
            <form>
              <input type="text" className="form-control" placeholder="Add Data..." 
              onKeyUp={(InputEvent)=>{this.storeInputData(InputEvent)}} />
              <br/>
              <button type="button" className="btn btn-success" onClick={this.storeFinalData}>Add Data</button>         
            </form>
          </div>
        </div>
        </div>
        {/* second col*/}
        <div className="col-lg-5 col-md-10">
        <div className="card mt-3">
          <div className="card-body">
           <ul className="list-group">
              {this.state.storeData.map((item,index)=>(
              <li className="list-group-item" key={index}>{item}
              <button type="button" className="btn btn-danger" id={index} onClick={(deleteEvent)=>{this.deleteStoreData(deleteEvent)}}>
                Delete</button></li>))}
            </ul>
         </div>
         </div>
         </div>
         </div>
    )
  }
}