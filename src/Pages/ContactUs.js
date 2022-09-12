import React from 'react'
import { useRef } from 'react'
import Header from '../Header/Header';
import Header2 from '../Header/Header2';
import classes from './ContactUs.module.css'

function ContactUs() {
   
    let nameRef=useRef('');
    let emailRef=useRef('');
    let phoneRef=useRef('');

    const submitHandler=async (e)=>{
        e.preventDefault();

        const userDetails={
            name: nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value

        }
        console.log(userDetails)
        const response= await fetch('https://ecomm-contactform-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(response)
        const data= await response.json();
        console.log(data)

    }
    
  return (
    <>
    <Header/>
    <Header2/>
    <div className={classes.wrapper}>
     <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.title}>Contact us </div>
        <label>Name: </label>
        <input type="text" name="name" ref={nameRef} className={classes.formEntry}/>
        <br/>
        <br/>
        <label>Email Id: </label>
        <input type="email" name="email" ref={emailRef} className={classes.formEntry}/>
        <br/>
        <br/>
        <label>Phone No: </label>
        <input type="number" name="number" ref={phoneRef} className={classes.formEntry}/>
        <br/>
        <br/>
        <button className={classes.submit}>Submit Now</button>
        </form>
    </div>
    </>
  )
}

export default ContactUs
