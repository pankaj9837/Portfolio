import React from 'react'

function Contact() {
  return (
    <div className='reveal' style={{ width:'96%',margin:" 0 2%"}}>
    <div style={{
        padding:"20px",
        display:'flex',flexFlow:"wrap",
        justifyContent:'center'
    }}> 
      
      <div style={{width:"clamp(400px,40%,50%)",display:"flex",flexDirection:"column",margin:"1%"}}>
      <h2 style={{padding:'5px',margin:"10px",color:"#0057A7"}}> Contact Me</h2>
        <input placeholder='Full Name' type='text' style={{padding:'5px',margin:"10px"}}/>
        <input placeholder='Your Email' type='email'style={{padding:'5px',margin:"10px"}}/>
        <textarea placeholder='Message' rows={4} style={{padding:'5px',margin:"10px"}}/>
        <button style={{borderRadius:"5px",background:"#77CCFD",border:"none",fontWeight:"bold ",color:"white",padding:"10px",margin:"10px 10px 40px 10px"}}>SUBMIT</button>

      </div>
      <div style={{width:"clamp(400px,40%,50%)",margin:"1%"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.992341746848!2d77.43427087601174!3d23.206949709421195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43b2967f45cf%3A0xa78efdc51ee4dc92!2sSai%20Board%20Square%2C%20E-7%2C%20Arera%20Colony%2C%20Bhopal%2C%20Madhya%20Pradesh%20462016!5e0!3m2!1sen!2sin!4v1703140682035!5m2!1sen!2sin" width="100%" height="100%" style={{border:0,boxShadow:"0 0 5px grey"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </div>
  )
}

export default Contact
