import React from "react";
import { useState } from "react";
import './WenDisplay.css';
import Blossom from "./Blossom";
export default function WenDisplay({ wilHex })
{
const [ hexOne, setHexOne ] = useState(64);
const [ hexTwo, setHexTwo ] = useState(63);

function handleHover(hoveredHex){
setHexOne(hoveredHex);
}
function handleHoverNuc(hoveredHexNuc){
  setHexTwo(hoveredHexNuc);
}

return (
<div className="wen-display">
  <Blossom 
  wilHex={wilHex}
  hex={hexOne}
  />
  <div className="wen-sequence">
    <div className="row-eight">
      <div onMouseOver={function(){handleHover(8);handleHoverNuc(23);}}>{wilHex[7].hex}</div>
      <div onMouseOver={function(){handleHover(16);handleHoverNuc(39);}}>{wilHex[15].hex}</div>
      <div onMouseOver={function(){handleHover(24);handleHoverNuc(2);}}>{wilHex[23].hex}</div>
      <div onMouseOver={function(){handleHover(32);handleHoverNuc(43);}}>{wilHex[31].hex}</div>
      <div onMouseOver={function(){handleHover(40);handleHoverNuc(63);}}>{wilHex[39].hex}</div>
      <div onMouseOver={function(){handleHover(48);handleHoverNuc(38);}}>{wilHex[47].hex}</div>
      <div onMouseOver={function(){handleHover(56);handleHoverNuc(28);}}>{wilHex[55].hex}</div>
      <div onMouseOver={function(){handleHover(64);handleHoverNuc(63);}}>{wilHex[63].hex}</div>
    </div>
    <div className="row-seven">
      <div onMouseOver={function(){handleHover(7);handleHoverNuc(24);}}>{wilHex[6].hex}</div>
      <div onMouseOver={function(){handleHover(15);handleHoverNuc(40);}}>{wilHex[14].hex}</div>
      <div onMouseOver={function(){handleHover(23);handleHoverNuc(2);}}>{wilHex[22].hex}</div>
      <div onMouseOver={function(){handleHover(31);handleHoverNuc(44);}}>{wilHex[30].hex}</div>
      <div onMouseOver={function(){handleHover(39);handleHoverNuc(64);}}>{wilHex[38].hex}</div>
      <div onMouseOver={function(){handleHover(47);handleHoverNuc(37);}}>{wilHex[46].hex}</div>
      <div onMouseOver={function(){handleHover(55);handleHoverNuc(28);}}>{wilHex[54].hex}</div>
      <div onMouseOver={function(){handleHover(63);handleHoverNuc(64);}}>{wilHex[62].hex}</div>
    </div>
    <div className='row-six'>
      <div onMouseOver={function(){handleHover(6);handleHoverNuc(37);}}>{wilHex[5].hex}</div>
      <div onMouseOver={function(){handleHover(14);handleHoverNuc(43);}}>{wilHex[13].hex}</div>
      <div onMouseOver={function(){handleHover(22);handleHoverNuc(40);}}>{wilHex[21].hex}</div>
      <div onMouseOver={function(){handleHover(30);handleHoverNuc(28);}}>{wilHex[29].hex}</div>
      <div onMouseOver={function(){handleHover(38);handleHoverNuc(63);}}>{wilHex[37].hex}</div>
      <div onMouseOver={function(){handleHover(46);handleHoverNuc(54);}}>{wilHex[45].hex}</div>
      <div onMouseOver={function(){handleHover(54);handleHoverNuc(63);}}>{wilHex[53].hex}</div>
      <div onMouseOver={function(){handleHover(62);handleHoverNuc(28);}}>{wilHex[61].hex}</div>
    </div>
    <div className="row-five">
      <div onMouseOver={function(){handleHover(5);handleHoverNuc(38);}}>{wilHex[4].hex}</div>
      <div onMouseOver={function(){handleHover(13);handleHoverNuc(44);}}>{wilHex[12].hex}</div>
      <div onMouseOver={function(){handleHover(21);handleHoverNuc(39);}}>{wilHex[20].hex}</div>
      <div onMouseOver={function(){handleHover(29);handleHoverNuc(27);}}>{wilHex[28].hex}</div>
      <div onMouseOver={function(){handleHover(37);handleHoverNuc(64);}}>{wilHex[36].hex}</div>
      <div onMouseOver={function(){handleHover(45);handleHoverNuc(53);}}>{wilHex[44].hex}</div>
      <div onMouseOver={function(){handleHover(53);handleHoverNuc(64);}}>{wilHex[52].hex}</div>
      <div onMouseOver={function(){handleHover(61);handleHoverNuc(27);}}>{wilHex[60].hex}</div>
    </div>
    <div className="row-four">
      <div onMouseOver={function(){handleHover(4);handleHoverNuc(24);}}>{wilHex[3].hex}</div>
      <div onMouseOver={function(){handleHover(12);handleHoverNuc(53);}}>{wilHex[11].hex}</div>
      <div onMouseOver={function(){handleHover(20);handleHoverNuc(23);}}>{wilHex[19].hex}</div>
      <div onMouseOver={function(){handleHover(28);handleHoverNuc(1);}}>{wilHex[27].hex}</div>
      <div onMouseOver={function(){handleHover(36);handleHoverNuc(40);}}>{wilHex[35].hex}</div>
      <div onMouseOver={function(){handleHover(44);handleHoverNuc(1);}}>{wilHex[43].hex}</div>
      <div onMouseOver={function(){handleHover(52);handleHoverNuc(40);}}>{wilHex[51].hex}</div>
      <div onMouseOver={function(){handleHover(60);handleHoverNuc(27);}}>{wilHex[59].hex}</div>
    </div>
    <div className="row-three">
      <div onMouseOver={function(){handleHover(3);handleHoverNuc(23);}}>{wilHex[2].hex}</div>
      <div onMouseOver={function(){handleHover(11);handleHoverNuc(54);}}>{wilHex[10].hex}</div>
      <div onMouseOver={function(){handleHover(19);handleHoverNuc(24);}}>{wilHex[18].hex}</div>
      <div onMouseOver={function(){handleHover(27);handleHoverNuc(2);}}>{wilHex[26].hex}</div>
      <div onMouseOver={function(){handleHover(35);handleHoverNuc(39);}}>{wilHex[34].hex}</div>
      <div onMouseOver={function(){handleHover(43);handleHoverNuc(1);}}>{wilHex[42].hex}</div>
      <div onMouseOver={function(){handleHover(51);handleHoverNuc(39);}}>{wilHex[50].hex}</div>
      <div onMouseOver={function(){handleHover(59);handleHoverNuc(27);}}>{wilHex[58].hex}</div>
    </div>
    <div className="row-two">
      <div onMouseOver={function(){handleHover(2);handleHoverNuc(2);}}>{wilHex[1].hex}</div>
      <div onMouseOver={function(){handleHover(10);handleHoverNuc(37);}}>{wilHex[9].hex}</div>
      <div onMouseOver={function(){handleHover(18);handleHoverNuc(54);}}>{wilHex[17].hex}</div>
      <div onMouseOver={function(){handleHover(26);handleHoverNuc(54);}}>{wilHex[25].hex}</div>
      <div onMouseOver={function(){handleHover(34);handleHoverNuc(43);}}>{wilHex[33].hex}</div>
      <div onMouseOver={function(){handleHover(42);handleHoverNuc(23);}}>{wilHex[41].hex}</div>
      <div onMouseOver={function(){handleHover(50);handleHoverNuc(43);}}>{wilHex[49].hex}</div>
      <div onMouseOver={function(){handleHover(58);handleHoverNuc(37);}}>{wilHex[57].hex}</div>
    </div>
    <div className="row-one">
      <div onMouseOver={function(){handleHover(1);handleHoverNuc(1);}}>{wilHex[0].hex}</div>
      <div onMouseOver={function(){handleHover(9);handleHoverNuc(38);}}>{wilHex[8].hex}</div>
      <div onMouseOver={function(){handleHover(17);handleHoverNuc(53);}}>{wilHex[16].hex}</div>
      <div onMouseOver={function(){handleHover(25);handleHoverNuc(53);}}>{wilHex[24].hex}</div>
      <div onMouseOver={function(){handleHover(33);handleHoverNuc(44);}}>{wilHex[32].hex}</div>
      <div onMouseOver={function(){handleHover(41);handleHoverNuc(24);}}>{wilHex[40].hex}</div>
      <div onMouseOver={function(){handleHover(49);handleHoverNuc(44);}}>{wilHex[48].hex}</div>
      <div onMouseOver={function(){handleHover(57);handleHoverNuc(38);}}>{wilHex[56].hex}</div>
    </div>
  </div>
  <Blossom 
  wilHex={wilHex}
  hex={hexTwo}
  />
</div>)
}