import {React} from "react"
import './Blossom.css';
export default function Blossom({ wilHex, hex }){
return (
   <div className="blossom"> 
   <span className="glyph"> {wilHex[(hex -1)].hex}</span>
       <h1>{wilHex[(hex -1)].num}.</h1>
       <h1>{wilHex[(hex -1)].simpinyin}</h1>
       <h1>{wilHex[(hex -1)].name}</h1>
    <h2>Thwan:</h2>
    <p>{wilHex[(hex -1)].thwan}</p>
    <h2>Image:</h2>
    <p>{wilHex[(hex -1)].img}</p>
      <div className="lines">
        <p>{wilHex[(hex -1)].line1} {wilHex[(hex -1)].first}</p>
        <p>{wilHex[(hex -1)].line2} {wilHex[(hex -1)].second}</p>
        <p>{wilHex[(hex -1)].line3} {wilHex[(hex -1)].third}</p>
        <p>{wilHex[(hex -1)].line4} {wilHex[(hex -1)].fourth}</p>
        <p>{wilHex[(hex -1)].line5} {wilHex[(hex -1)].fifth}</p>
        <p>{wilHex[(hex -1)].line6} {wilHex[(hex -1)].sixth}</p>
        <p>{wilHex[(hex -1)].seventh}</p>
   </div>
</div>
)
}