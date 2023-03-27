import { useState } from "react";

const Contact = (props) => {
    const[username,setName]=useState('')
    const[useremail,setEmail]=useState('')
    const[phoneno,setPhno]=useState('')
    const[message,setMsg]=useState('')

    const nameHandler=(event)=>{
        setName(event.target.value)
    }
    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    const phHandler=(event)=>{
        setPhno(event.target.value)
    }
    const msgHandler=(event)=>{
        setMsg(event.target.value)
    }
  function submitHandler(event) {
    event.preventDefault();
    const userData={
        name:username,
        email:useremail,
        phno:phoneno,
        msg:message
    }
    props.onAdduser(userData)
    setName(''); setMsg('');setEmail('');setPhno('')
  }
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-md-8">
          <form className="mb-3" onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="name">Your Name :</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter name"
                  value={username}
                  onChange={nameHandler}
                  required
                />
                <label htmlFor="name">E-Mail :</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter email"
                  value={useremail}
                  onChange={emailHandler}
                  required
                />
                <label htmlFor="name">Phone Number :</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Enter Mob. number"
                  value={phoneno}
                  onChange={phHandler}
                  required
                />
                <label htmlFor="name">Enter Your Message :</label><br/>
                <textarea rows='1'><input type='text'  placeholder="Enter name" value={message}
                  onChange={msgHandler}
                ></input></textarea>
              </div>
            </div>
            <button className="btn btn-success mb-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
