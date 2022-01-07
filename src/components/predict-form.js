import React from "react";


export const Prediction = () =>{
    return (
        <form>
            <input type="text" placeHolder="full name" /> <br/>
            <div className="cover">
            <select>
                <option value="2">18-22years</option>
                <option value="4">22-25years</option>
                <option value="8">25-30years</option>
                <option value="50">Over 30years</option>
            </select>
            </div>
           <div className="cover">
           <select>
                <option value="5">students</option>
                <option value="10">Working</option>
            </select>
           </div>
            <div className="cover">
            <select>
                <option value="-2">Introvert</option>
                <option value="4">Extrovert</option>
                <option value="6">Pervert</option>
                <option value="4">Omnivert</option>
            </select>
            </div>
            <div className="cover">
            <select>
                <option value="2">students</option>
                <option value="4">Working</option>
            </select>
            </div>
            <button>Check my count!</button>
        </form>
    )
}