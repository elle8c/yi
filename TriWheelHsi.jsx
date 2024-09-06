import React from "react";
import './TriWheel.css';
export default function TriWheelHsi({tri}){
return (
<div className="tri-wheel-hsi">
    <div className="name">Hsi</div>
    <div className="southeast">SE</div>
    <div className="se">{tri[1].glyph}</div>
    <div className="east">E</div>
    <div className="e">{tri[2].glyph}</div>
    <div className="northeast">NE</div>
    <div className="ne">{tri[3].glyph}</div>
    <div className="north">N</div>
    <div className="n">{tri[7].glyph}</div>
    <div className="south">S</div>
    <div className="s">{tri[0].glyph}</div>
    <div className="southwest">SW</div>
    <div className="sw">{tri[4].glyph}</div>
    <div className="west">W</div>
    <div className="w">{tri[5].glyph}</div>
    <div className="northwest">NW</div>
    <div className="nw">{tri[6].glyph}</div>
</div>
)
}