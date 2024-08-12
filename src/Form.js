import React, { useState } from 'react'

const Form = () => {
const [formData, setFormData] = useState({name:'', email:''})

const handleChange =(e) =>{

      setFormData( prevData => ({...prevData, [e.target.name]:e.target.value}))
    // setFormData({...formData,[e.target.name]: e.target.value})
}


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({nmae:'',email:''})

}



  return (
    <div>Form

        <form onSubmit={handleSubmit}>
            <label>Name:</label>
    <input type='text' name='name' value={formData.name} placeholder='ENTER your name' onChange={handleChange}/>
    <label>Email:</label>
    <input type='text' name='email' value={formData.email} placeholder='ENTER your mail id' onChange={handleChange}/>
<button type='submit'> Submit</button>
        </form>
    </div>
  )
}

export default Form;