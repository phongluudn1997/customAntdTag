import React from 'react'
import CustomTag from './customTag'

export default function TitleTree(props) {
    return (
        <div style = {{ textAlign: 'left', margin: '10px auto' }}>
            <div>
                <span>{props.code} - {props.title}</span>
                <Tag color={props.result ? "#ff0000" : "#000"} style = {{marginLeft: 10}}>{props.result.toString().toUpperCase()}</CustomTag>
            </div>
            <div>
                <span style={{fontSize: "12px"}}> {props.message} </span>
            </div>
        </div>
    )
}
