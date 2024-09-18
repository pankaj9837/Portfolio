
import React, {useState} from 'react'

function Panel() {
  const sidebar=[{
    Name:"Dashboard",
    icon:"fa-solid fa-dashboard"
  },
  {
    Name:"Appointment List",
    icon:"fa-solid fa-list"
  },
  {
    Name:"Patient List",
    icon:"fa-solid fa-file"
  },
]

    return (
        <div style={{
            width:"100vw",
            display:"flex"
       }}>
            <div style={{background:"#202030d6",width:"200px",height:"100vh",color:"white"}}>
                <div style={{borderBottom:"2px solid black", textAlign:"center",padding:"20px 10px ",fontWeight:'bold'}}> Admin panel</div>
                <div>
                <ul>
                    {
                        sidebar.map((item)=>(
                            <li style={{padding :5}}><i style={{margin:"0 10px "}} className={item.icon}></i>{item.Name}</li>
                        ))
                    }
                 </ul>
                </div>
            </div>
            <div style={{flex:1,background:"#e7e7e7c4"}}>
                <div style={{textAlign:"end",background:"white",padding:5}}>
                  <div  style={{display:"flex",justifyContent:"end",alignItems:"center",marginRight:20}}>
                    <div>
                    <p>Dr.Chabbi</p>
                    <p style={{fontSize:12,color:"grey"}}>Admin</p>
                    </div>
                    <div style={{borderRadius:"50%",border:"1px black",overflow:"hidden",padding:"5px",marginLeft:10,boxShadow:"0 0 3px grey"}}>
                   <img src="https://firebasestorage.googleapis.com/v0/b/mygold-7d2e5.appspot.com/o/customer_doc%2Fblob2023-12-22-04-44-41?alt=media" width={40} alt='Loading...'></img>
                    </div>
                  </div>
                </div>
                <div>
                    <div style={{margin:20,padding:10,background:"white",borderRadius:"4px"}}><label>Appointment List</label>
                    <input style={{padding:5,marginLeft:10,borderRadius:4}} placeholder='Search...' type='text'></input><i style={{marginLeft:-25}} className='fa-solid fa-magnifying-glass'></i>
                    </div>
                </div>
                <div style={{margin:20}}>
                  <table width="100%" style={{textAlign:"center",borderCollapse:'collapse'}}>
                    <thead>
                      <th>Patient ID</th>
                      <th>Patient Name</th>
                      <th>Mobile No</th>
                      <th>Visit Date</th>
                      <th>Visit Time</th>
                      <th>Condition</th>
                      <th>Action</th>
                    </thead>
                    <tbody>
                      <tr style={{background:"white",margin:"2px"}}>
                        <td style={{padding:5}}>#001</td>
                        <td >Joseph</td>
                        <td >6584545854</td>
                        <td >22-12-2024</td>
                        <td >11:00 AM</td>
                        <td >fever</td>
                        <td ><i style={{margin:"0 5px"}} className='fa-solid fa-pen'></i><i style={{margin:"0 5px",color:"red"}} className='fa-solid fa-trash'></i></td>
                      </tr>
                      <tr  >
                        <td style={{padding:5}}>#002</td>
                        <td >Ganshyam</td>
                        <td >6545685454</td>
                        <td >22-12-2024</td>
                        <td >12:00 PM</td>
                        <td >Head Ache</td>
                        <td ><i style={{margin:"0 5px"}} className='fa-solid fa-pen'></i><i style={{margin:"0 5px",color:"red"}} className='fa-solid fa-trash'></i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
            </div>

        
        </div>
      )
}

export default Panel