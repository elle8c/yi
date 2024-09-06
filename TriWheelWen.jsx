import React from "react";
import './TriWheel.css';
export default function TriWheels({tri}){
return (
<div className="tri-wheel-wen">
  <div className="name">Wen</div>
    <div className="southeast">SE</div>
    <div className="se">{tri[4].glyph}</div>
    <div className="east">E</div>
    <div className="e">{tri[3].glyph}</div>
    <div className="northeast">NE</div>
    <div className="ne">{tri[6].glyph}</div>
    <div className="north">N</div>
    <div className="n">{tri[5].glyph}</div>
    <div className="south">S</div>
    <div className="s">{tri[2].glyph}</div>
    <div className="southwest">SW</div>
    <div className="sw">{tri[7].glyph}</div>
    <div className="west">W</div>
    <div className="w">{tri[1].glyph}</div>
    <div className="northwest">NW</div>
    <div className="nw">{tri[0].glyph}</div>
</div>
)
}