import React,{useState,useEffect} from 'react'
import Contact from './Contact';
import About from './About';
import moment from 'moment';

function Dashboard() {

  const [isOpen, setIsOpen] = useState(false);
  const [show, setshow] = useState(false);
  const [Book, setBook] = useState(false);
  const [Next, setNext] = useState(false);

 



  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const SC=(e)=>{
    setIsOpen(false);
   const element= document.getElementById(e)
   element.scrollIntoView({behavior:"smooth"})
  }

    useEffect(() => {
      const e=document.getElementById("Scroll")
      const handleScroll = () => {
       let reveals=document.querySelectorAll(".reveal");
       for(let i = 0;i<reveals.length;i++){
        let height=e.clientHeight;
        let top=reveals[i].getBoundingClientRect().top;
        let point=50;
        
        if(top<height-point){
          reveals[i].classList.add("active");
        }else{
          reveals[i].classList.remove("active");
          }
       }
     
      };
  
      // Attach the event listener when the component mounts
     e.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        e.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const [dates, setDates] = useState([]);

  useEffect(() => {
    const getNextDates = () => {
      const currentDate = moment();
      const nextDates = [];

      while (nextDates.length < 4) {
        if (currentDate.day() !== 0) {
          nextDates.push(currentDate.format('D MMM'));
        }
        currentDate.add(1, 'days');
      }
      setDates(nextDates);
    };

    getNextDates();
  }, []);
  const [selecteddate, setSelecteddate] = useState(null);

  const handledateSelection = (date) => {
    setSelecteddate(date);
  };

    const [selectedTime, setSelectedTime] = useState(null);
    const handleTimeSelection = (time) => {
      setSelectedTime(time);
    };
  
    const timeSlots = ['09:00 PM', '08:00 PM', '07:00 PM', '06:00 PM','05:00 PM','04:00 PM','03:00 PM','02:00 PM','01:00 PM','12:00 PM','11:00 AM','10:00 AM','09:00 AM'];
    
    
    const goto=()=>{
      console.log("whatsapp")
      window.location.href="https://wa.me/9131037870"
    }

  return (
    <div style={{
        width:"100vw",
        // height:"100vh",
        backgroundImage: "linear-gradient(-45deg, #020024 0%, #090979 35%, #00d4ff 100%)",
        display:"grid"
   }}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",borderRadius:"5px",position:"sticky",zIndex:20,top:0,background:"white",height:"8vh"}}>
            <div><h2 style={{color:"#0057A7"}}>Pankaj Sahu</h2></div>
            <div className='nav-menu menu' style={{display:"flex",alignItems:"center"}}>
                <div onClick={()=>SC("Home")} style={{marginRight:"25px",fontWeight:"bold"}}>Home</div>
                <div  onClick={()=>SC("About")} style={{marginRight:"25px",fontWeight:"bold"}}>About Me</div>
                {/* <div  style={{marginRight:"25px",fontWeight:"bold"}}>Skills</div> */}
                <div   style={{marginRight:"25px",fontWeight:"bold"}}>Projects</div>
                <div  onClick={()=>SC("Contact")} style={{marginRight:"25px",fontWeight:"bold"}}>Contact</div>
                {/* <span onClick={()=>setBook(true)} style={{border:"2px solid",borderImage:"linear-gradient(-45deg, #020024 0%, #090979 35%, #00d4ff 100%)",borderImageSlice:"1",padding:"5px 10px",fontWeight:"bold",borderRadius:"3px"}}>Book Now</span> */}
            </div>
         <div className='toggle'> 
        <i className='fa-solid fa-bars' onClick={toggleNavbar} style={{fontSize:"20px",marginTop:"4px"}}></i>
          </div>   
        </div>
        {
          isOpen&& <div className='nav-menu nav' style={{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"center",position:"fixed",top:"8vh",left:0,zIndex:5,backgroundColor:'white',width:"100%",height:"100%"}}>
          <div onClick={()=>SC("Home")} style={{fontWeight:"bold"}}>Home</div>
          <div  onClick={()=>SC("About")} style={{fontWeight:"bold"}}>About Me</div>
          {/* <div style={{fontWeight:"bold"}}>Skills</div> */}
          <div  style={{fontWeight:"bold"}}>Project</div>
          <div onClick={()=>SC("Contact")} style={{fontWeight:"bold"}}>Contact</div>
          {/* <span onClick={()=>(setIsOpen(false),setBook(true))} style={{border:"2px solid",borderImage:"linear-gradient(-45deg, #020024 0%, #090979 35%, #00d4ff 100%)",borderImageSlice:"1",padding:"5px 10px",fontWeight:"bold",borderRadius:"3px"}}>Book Now</span> */}
      </div>
        }
       
    <div id='Scroll' style={{height:"92vh",width:"100%",backgroundColor:"white",placeSelf:"center",position:"relative",overflow:"auto"}}>


    <section id='Home' style={{minHeight:"90vh",background:"#EFF4F5"}} >
        <div className='wrapper'>
          <a onClick={()=>setBook(true)}> 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Developer
          </a>
        </div>
        <div  style={{display:'flex',flexFlow:"wrap",padding:"20px",alignItems:"center",justifyContent:"center",height:"80vh"}}>
          <div style={{width:"clamp(400px,50%,50%)"}}>
            <h1 style={{marginTop:"20px",fontSize:50}}>Welcome to My Portfolio</h1>
            <div style={{marginTop:'25px'}}>I build beautiful and functional web experiences using HTML, CSS, JavaScript, and React.</div>
            <a href="#projects" class="btn">View Projects</a>
          </div>
          {/* <div style={{position:"relative"}}>
            <img className='dr' style={{filter:'drop-shadow(0px 0px 2px black)'}} src="https://firebasestorage.googleapis.com/v0/b/mygold-7d2e5.appspot.com/o/customer_doc%2Fblob2023-12-22-04-44-41?alt=media" alt='Loading...' width="100%"></img>
            <div style={{display:"flex",alignItems:"center",boxShadow:"0 0 5px grey",borderRadius:"10px",padding:"10px",fontWeight:"bold",zIndex:3,backgroundColor:"white", position:"absolute",right:"0",bottom:"10%",fontSize:"100%"}}>
              <i className='fa-solid fa-circle-check' style={{color:'#31C65F ',marginRight:"5px"}}></i>
               <div>18 years Experience</div> 
            </div>

          </div> */}
        </div>
        </section>
        
        {/* Book Appontment */}
{/* {
  Book&&<div style={{height:"100vh",width:"100vw",position:"fixed",top:"0",left:"0",background:"#00000066",zIndex:"25",display:"grid",placeItems:"center",animation:"  fadeInDown .5s"}}>
  <div style={{width:"clamp(290px,25%,60%)",boxShadow:"0 0 10px grey",borderRadius:"10px",padding:"2px",zIndex:"30",backgroundColor:"white",animation:"fadeIn 1.5s"}}>

  {!Next?<>
  
  <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
    <div style={{fontWeight:"bold",fontSize:"75%",margin:"10px"}}>Book Date </div>
    <i className='fa-solid fa-xmark' onClick={()=>setBook(false)} style={{margin:"10px"}}></i>
  </div> 
  <div style={{display:'flex',justifyContent:"space-evenly",alignItems:"center", padding:"10px"}}>
  {dates.map((date, index) => (
          <div
            key={index}
            style={{
              boxShadow:"0 0 1.5px grey",
              margin:"5px",
              borderRadius:"4px",
              padding:"5px",
              display:"flex",
              alignItems:"center",
              cursor: "pointer",
              backgroundColor: selecteddate === date ? 'lightblue' : 'white'
            }}
            onClick={() => handledateSelection(date)}
          >
            {date}
          </div>
        ))}
  </div>
 

     <div style={{fontWeight:"bold",width:"25%",fontSize:"75%",margin:"10px"}}>Book Time </div>
  <div style={{display:'flex',justifyContent:"center",alignItems:"center", padding:"10px",flexWrap:"wrap"}}> 
  {timeSlots.map((time, index) => (
          <div
            key={index}
            style={{
              boxShadow:"0 0 1.5px grey",
              margin:"5px",
              borderRadius:"4px",
              padding:"5px",
              display:"flex",
              alignItems:"center",
              cursor: "pointer",
              backgroundColor: selectedTime === time ? 'lightblue' : 'white'
            }}
            onClick={() => handleTimeSelection(time)}
          >
            {time}
          </div>
        ))}
  </div>
     <div onClick={()=>setNext(true)} style={{padding:"5px 10px",backgroundColor:"#FFC300",color:"white",borderRadius:"4px", textAlign:'center',margin:"10px"}}>Next</div>
     
     
     </>:<>
    
    
    
     <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
    <i className='fa-solid fa-arrow-left' onClick={()=>setNext(false)} style={{margin:"10px"}}></i>
    <i className='fa-solid fa-xmark' onClick={()=>setBook(false)} style={{margin:"10px"}}></i>
  </div> 
  <div style={{display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        // alignItems:"center",
        flexFlow:'wrap',}}>
 <div style={{padding:"5px 10px", textAlign:"end",width:300}}>
    <label style={{fontSize:12,margin:"0px 15px 0px 0px"}}>Name</label>
    <input   placeholder='Enter Name' style={{fontSize:12,padding:"3px 10px 5px 10px"}} type='text'/>
  </div>
 <div style={{padding:"5px 10px", textAlign:"end",width:300}}>
    <label style={{fontSize:12,margin:"0px 15px 0px 0px"}}>Age</label>
    <input   placeholder='Enter Age' style={{fontSize:12,padding:"3px 10px 5px 10px"}} type='number'/>
  </div>
 <div style={{padding:"5px 10px", textAlign:"end",width:300}}>
    <label style={{fontSize:12,margin:"0px 15px 0px 0px"}}>Mobile No.</label>
    <input   placeholder='Enter Mobile No.' style={{fontSize:12,padding:"3px 10px 5px 10px"}} type='number'/>
  </div>
 <div style={{padding:"5px 10px", textAlign:"end",width:300}}>
    <label style={{fontSize:12,margin:"0px 15px 0px 0px"}}>Email Id</label>
    <input   placeholder='Enter Email Id' style={{fontSize:12,padding:"3px 10px 5px 10px"}} type='email'/>
  </div>
 <div style={{padding:"5px 10px", textAlign:"end",width:300}}>
    <label style={{fontSize:12,margin:"0px 15px 0px 0px"}}>Remarks</label>
    <input rows={1}  placeholder='Remarks' style={{fontSize:12,padding:"3px 10px 5px 10px"}} type='text'/>
  </div>
  

        </div>
     <div style={{padding:"5px 10px",backgroundColor:"#FFC300",color:"white",borderRadius:"4px", textAlign:'center',margin:"10px"}}>Book Appontment</div>
     </>}
</div>
</div>
} */}

{/* DiaLog Box */}
{/* {
  show&&<div style={{width:"clamp(290px,40%,40%)",boxShadow:"0 0 10px grey",borderRadius:"10px",padding:"2px",position:"fixed",bottom:"7%",left:"6%",zIndex:3,backgroundColor:"white"}}>
  <div style={{display:'flex',justifyContent:"space-evenly",alignItems:"center", padding:"10px"}}>
     <div style={{fontWeight:"bold",width:"25%",fontSize:"75%"}}>Book an Appointment </div>
     <div style={{display:"inline-flex",alignItems:"center",marginLeft:"5%"}}>
     <input type='checkbox'></input><label style={{fontSize:"70%",marginLeft:5}}>Send mesage on phone </label>
    </div>
     
     <div style={{padding:"5px 10px",backgroundColor:"#FFC300",color:"white",borderRadius:"4px",fontSize:"75%", textAlign:'center'}}>Book Now </div>
  </div>
  <div style={{display:'flex',justifyContent:"space-evenly",alignItems:"center",padding:"10px"}}>
    
     <div style={{boxShadow:"0 0 1.5px grey",borderRadius:"4px",padding:"5px",display:"flex",alignItems:"center"}}>
      <div>
      <i className='fa-solid fa-location' style={{borderRadius:"50%",padding:"5px"}}></i>
      </div>
      <div>
      <p style={{fontSize:"70%"}}>location</p>
      <p style={{fontSize:"70%"}}>Arera Colony</p>
      </div>

      </div>
     <div style={{boxShadow:"0 0 1.5px grey",borderRadius:"4px",padding:"5px",display:"flex",alignItems:"center"}}>
      <div>
      <i className='fa-solid fa-calendar' style={{borderRadius:"50%",padding:"5px"}}></i>
      </div>
      <div>
      <p style={{fontSize:"70%"}}>Appointment date</p>
      <p style={{fontSize:"70%"}}>18 Dec,2024</p>
      </div>

      </div>
     <div style={{boxShadow:"0 0 1.5px grey",borderRadius:"4px",padding:"5px",display:"flex",alignItems:"center"}}>
      <div>
      <i className='fa-solid fa-person' style={{borderRadius:"50%",padding:"5px"}}></i>
      </div>
      <div>
      <p style={{fontSize:"70%"}}>Persons</p>
      <p style={{fontSize:"70%"}}>2 adults,1 child</p>
      </div>

      </div>
  </div>
</div>
} */}
<section id='About'  style={{minHeight:"90vh"}}>

<About/>
</section>
<section id='Contact'  style={{minHeight:"90vh",background:"#EFF4F5"}}>
<Contact/>
</section>
      

      <footer  style={{background:"#111",paddingTop:40,color:"white",display:'flex',flexDirection:"column",alignItems:"center"}}>
        <div style={{textAlign:"center",width:"60%"}}>
        <h3 >Let's Connect</h3>
        <p>Thank you for visiting, and I look forward to the opportunity of working together to create something extraordinary!</p>
        <ul style={{display:"flex",fontSize:"1.1rem",listStyle: "none",justifyContent:"center",margin:"20px 0px",color:"#0057a7"}}>
          <li style={{border: "1.1px solid #0057a7",borderRadius:"50%",padding:"5px",margin:"10px",width:30}}><i className='fa fa-facebook'></i></li>
          <li style={{border: "1.1px solid #0057a7",borderRadius:"50%",padding:"5px",margin:"10px",width:30}}><i className='fa fa-twitter'></i></li>
          <li onClick={goto} style={{border: "1.1px solid #0057a7",borderRadius:"50%",padding:"5px",margin:"10px",width:30}}><i className='fa fa-whatsapp'></i></li>
          <li style={{border: "1.1px solid #0057a7",borderRadius:"50%",padding:"5px",margin:"10px",width:30}}><i className='fa fa-youtube'></i></li>
          <li style={{border: "1.1px solid #0057a7",borderRadius:"50%",padding:"5px",margin:"10px",width:30}}><i className='fa fa-linkedin-square'></i></li>
        </ul>
        </div>
        <div style={{padding:"20px 0",background:'black',width:"100%"}}>
        <p>__COPYRIGHT &copy;2024 Pankaj Sahu. All rights reserved.</p>
        </div>

      </footer>
       





       
        
    </div>
    </div>
  )
 
}

export default Dashboard
