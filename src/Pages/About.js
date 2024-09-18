import React,{useEffect} from 'react'
import axios from 'axios'

function About() {
const get=async()=>{
  try {
    const res= await axios.get("http://127.0.0.1:5000/tasks")
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }

}
const POST=async()=>{
  try {
    const res= await axios.post("http://127.0.0.1:5000/tasks",{'title': 'New Task'})
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }

}

useEffect(()=>{
  // get()
},[])

  return (
    <div className='reveal' style={{ width:'96%',margin:" 0 2%"}}>
    <div style={{
        padding:"20px",
        display:'flex',flexFlow:"wrap",
        justifyContent:'center',
      
    }}>
      
      
     <div style={{width:"clamp(400px,48%,50%)",display:"flex",flexDirection:"column",margin:"1%"}}>
      <h2 style={{padding:'5px',margin:"0 10px ",color:"#0057A7"}}> About Me</h2>

      <h3 style={{padding:'5px',margin:"10px",color:"#0057A7"}}>Hi, I'm Pankaj Sahu 👋</h3>
      <p>I'm a passionate front-end developer dedicated to crafting seamless digital experiences through code. With a keen eye for design and a love for clean, efficient code, I specialize in turning concepts into responsive and user-friendly websites.</p>
      <h3 style={{padding:'5px',margin:"10px",color:"#0057A7"}}>My Approach:</h3>
      <p>I believe that great web development goes beyond lines of code—it's about understanding the end user and creating experiences that resonate with them. My approach is rooted in empathy, placing the user at the center of every design decision to deliver intuitive, user-friendly solutions.</p>
      </div>
      <div style={{width:"clamp(400px,20%,50%)",display:"flex",flexDirection:"column",margin:"1%"}}>
      <h3 style={{padding:'5px',margin:"10px",color:"#0057A7"}}> Skills</h3>
      <div>
       <span onClick={POST} style={{border:"1px solid",padding:5,margin:10,fontWeight:"bold",borderRadius:5}}>HTML</span>
       <span style={{border:"1px solid",padding:5,margin:10,fontWeight:"bold",borderRadius:5}}>CSS</span>
       <span style={{border:"1px solid",padding:5,margin:10,fontWeight:"bold",borderRadius:5}}>JAVASCRIPT</span>
       <span style={{border:"1px solid",padding:5,margin:10,fontWeight:"bold",borderRadius:5}}>REACT JS</span>
      </div>
-
      </div>
      
      </div>
{/* 

    <div style={{
        padding:"20px",
        display:'flex',flexFlow:"wrap-reverse",
        justifyContent:'center'
    }}>
          <div style={{width:"clamp(400px,20%,50%)",margin:"1%"}}>
      <img src="https://www.imaginarycloud.com/blog/content/images/2023/04/best-frontend-framework-.webp" width="130%" height="auto" alt='error'></img>
      </div>
      
      <div style={{width:"clamp(400px,48%,50%)",display:"flex",flexDirection:"column",margin:"1%"}}>
      <h3 style={{padding:'5px',margin:"10px",color:"#0057A7"}}>My values</h3>
      <p>Integrity, collaboration, and continuous improvement are the cornerstones of my work ethic. I believe in transparent communication, fostering a collaborative environment where ideas are valued, and feedback is embraced as an opportunity for growth.</p>
       
      </div>
      
     
      </div> */}


{/* 
    <div style={{
        padding:"20px",
        display:'flex',flexFlow:"wrap",
        justifyContent:'center'
    }}>
         
      
      <div style={{width:"clamp(400px,48%,50%)",display:"flex",flexDirection:"column",margin:"1%"}}>
      <h3 style={{padding:'5px',margin:"10px",color:"#0057A7"}}>My Journey</h3>
      <p>My journey into the world of web development began with a curiosity for technology and a desire to create. From tinkering with HTML and CSS as a hobbyist to honing my skills as a professional developer, every step of the way has been an enriching learning experience.</p>
      </div>
      <div style={{width:"clamp(400px,20%,50%)",margin:"1%"}}>
      <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2023/05/frontend-framework-cover.jpg" width="80%" height="auto"  alt='error'></img>
      </div>
     
      </div> */}


    {/* <div style={{
        padding:"20px",
        display:'flex',flexFlow:"wrap-reverse",
        justifyContent:'center'
    }}>
        <div style={{width:"clamp(400px,20%,50%)",margin:"1%"}}>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-7364653-6024620.png" width="80%" height="auto" alt='error'></img>
      </div>
      
      <div style={{width:"clamp(400px,48%,50%)",display:"flex",flexDirection:"column",margin:"1%"}}>
      <h3 style={{padding:'5px',margin:"10px",color:"#0057A7"}}>My Expertise:</h3>
      <p>With a strong foundation in HTML5, CSS3, and JavaScript, I specialize in front-end development, bringing designs to life with precision and creativity. I thrive on challenges and constantly seek to expand my skill set, staying up-to-date with the latest trends and technologies in the ever-evolving landscape of web development.</p>
       
      </div> */}
     
      {/* </div> */}
    </div>
  )
}

export default About
