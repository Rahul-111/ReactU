import React from "react"
import './Person.css'

function Person(props){
    return(
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and {props.age}</p>
            <input type="text" onChange = {props.changed} value = {props.name}/>
        </div>
    )
}

export default Person;