import React, {useState} from "react";
import { Cover, Form, Result } from "./form.style";
import comerade from "./comerad.jpg"
import first from "./image.jpg"


export const Prediction = () =>{
        const [status, setStatus ] = useState(false)
        const [show, setShow] = useState(false)
        const [message, setMessage] = useState("omo!")


        let total = 0;
        const FirstChange = (e)=>{
            let data = e.target.value;
            data  = data.split("");
            if(data[0] === "W"){
                setStatus(true)
            }else{
                total = 2;
            }
        }
        
        const nameChange = (e)=>{
            let data = e.target.value;
            if(status !== true){
                total += Number(data)
            }else{
            }
        }
       
        const result = (e)=>{
            e.preventDefault();
            if(total < 10){
                setMessage("Omo!! your body count is " + total)
                setShow(true)
            }else{
                setMessage("Nawa o, i hail thee. your score is " + total)
                setShow(true)
            }
            
        }
        const close = ()=>{
            setShow(false)
        }


    return (
        <>
        <Form onSubmit={result}>
            <input type="text" placeholder="Full name" onChange={FirstChange} /> <br/>
            <Cover>
            <b>Age gap</b>
            <select onChange={nameChange}>
            <option>select</option>
                <option value="2">18-22years</option>
                <option value="4">22-25years</option>
                <option value="8">25-30years</option>
                <option value="50">Over 30years</option>
            </select>
            </Cover>
           <Cover>
           <b>Current status</b>
           <select onChange={nameChange}>
           <option>select</option>
                <option value="5">students</option>
                <option value="10">Working</option>
            </select>
           </Cover>
            <Cover>
            <b>What is your trait</b>
            <select onChange={nameChange}>
                <option>select</option>
                <option value="-2">Introvert</option>
                <option value="4">Extrovert</option>
                <option value="6">Pervert</option>
                <option value="4">Omnivert</option>
            </select>
            </Cover>
            <Cover>
            <b>status</b>
            <select onChange={nameChange}>
            <option>select</option>
                <option value="10">Married</option>
                <option value="4">In Relationship</option>
                <option value="6">Confused</option>
                <option value="-5">Single</option>
            </select>
            </Cover>
            <button type="submit">Check my count!</button>
            </Form>
             {show && <Result>
             <img src={first} />
             <p>{message}</p>
             <svg onClick={close} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
</svg>
         </Result>}
        </>
    )
}