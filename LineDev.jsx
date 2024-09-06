import React from "react";
import { useState } from "react";
import './LineDev.css';
export default function LineDev(){

const [ tri, setTri ] = useState();

const lines = [ 
    '\u268B',
    '\u268A',
    '\u268C',
    '\u268D',
    '\u268F',
    '\u268E',
    '\u2635',
    '\u2637',
    '\u2630',
    '\u2632',
    '\u2633',
    '\u2634',
    '\u2636',
    '\u2631'
]
return(
    <div className="line-dev">
        <div className="third">
        <div>{lines[7]}</div>
        <div>{lines[12]}</div>
        <div>{lines[6]}</div>
        <div>{lines[11]}</div>
        <div>{lines[10]}</div>
        <div>{lines[9]}</div>
        <div>{lines[13]}</div>
        <div>{lines[8]}</div>
        </div>
    <div className="second">
        <div>{lines[4]}</div>
        <div>{lines[5]}</div><div>{lines[3]}</div>
        <div>{lines[2]}</div></div>
    <div className="first">
        <div>{lines[0]}</div>
        <div>{lines[1]}</div>
    </div>
</div>
)
    }