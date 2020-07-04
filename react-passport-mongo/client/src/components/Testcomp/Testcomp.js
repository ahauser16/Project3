import React from 'react';

export default function Testcomp (props){
    return (
        <div>
        <h1>{props.word}</h1>
        <button onClick={props.cb}>click</button>
        </div>
    )
}