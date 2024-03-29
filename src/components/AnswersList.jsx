import React from "react"
import {Answer} from './index'

const AnswersList = (props) =>{
    return(
        <div className="c-grid_answer">
            {props.answers.map((value,index)=>{
                return <Answer content={value.content} nextId={value.nextId} key={index} select={props.select}/>

            })}
        </div>
    )
}

export default AnswersList