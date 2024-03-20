import Employeedata from './Employeedata';
import { useParams } from 'react-router-dom';
function Employeedetails()
{
    const {name}=useParams();
    const finddata=Employeedata.find((e)=>
        e.name==name
    )
    return(
        <div className='conatiner' >
            <div className='row p-5 bg-light' ></div>
            <div className='row'>
                <div className='col-md-6'></div>
      <div className='col-md-3'>  <h1 className='text-warning'>{finddata.name}</h1></div>
      </div>
      <div className='col-md-3'></div>
      <div className='row'>
      <div className='col-md-5'></div>
      <div className='col-md-3 p-4'id="doneimage">
      <img src={finddata.photo} className="card-img-top img-fluid" height="250px"width="250px"/>
       </div>
       <div className='col-md-4'></div>
       </div>
        </div>
    )
}
export  default Employeedetails;