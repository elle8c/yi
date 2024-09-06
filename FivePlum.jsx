import { React } from "react"
import Blossom from "./Blossom"
export default function FivePlum({ wilHex, hexNumOne, hexNumTwo, hexNumNuc }){
return(
 <div className='five-plum'>
     <Blossom
    wilHex={wilHex} 
    hex={hexNumOne} />
     <Blossom
    wilHex={wilHex}
    hex={hexNumTwo} />
     <Blossom
    wilHex={wilHex}
    hex={hexNumNuc} />
    </div>
)
}