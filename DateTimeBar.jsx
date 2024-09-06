import { React, useEffect, useState } from "react"
import './DateTimeBar.css'
import moonTime from 'moon-time'
import FivePlum from "./FivePlum"

export default function DateTimeBar({ wilHex }){
const [isShown, setIsShown] = useState(true);
const handleClick = event => {
    setIsShown(current => !current);
};


var getCZ = require('chinese-zodiac');

const [ datetime, setDateTime ] = useState(new Date());

let now = new Date(datetime);

var currentM = now.getMonth() + 1;
var currentD = now.getUTCDate();
var currentY = now.getFullYear();
var currentT = now.getUTCHours();

let moonTimes = moonTime({
    year: currentY,
    month: currentM,
    day: currentD,
})

const [ step, setStep ] = useState(now);



let cz = getCZ(moonTimes.year);

console.log(cz);

function getYearCode(){
  if (cz.name === 'Rat'){
    return 1;
  } else if (cz.name === 'Ox'){
    return 2;
  } else if (cz.name === 'Tiger'){
    return 3;
  } else if (cz.name === 'Rabbit'){
    return 4;
  } else if (cz.name === 'Dragon'){
    return 5;
  } else if (cz.name === 'Snake'){
    return 6;
  } else if (cz.name === 'Horse'){
    return 7;
  } else if (cz.name === 'Goat'){
    return 8;
  } else if (cz.name === 'Monkey'){
    return 9;
  } else if (cz.name === 'Rooster'){
    return 10;
  } else if (cz.name === 'Dog'){
    return 11;
  } else if (cz.name === 'Pig'){
    return 12;
  }
}

let yearCode = getYearCode();

function getTimeCode(){
  if (currentT === 0 || currentT === 23){
    return 1;
  } else if (currentT >= 1 && currentT < 3){
    return 2;
  } else if (currentT >= 3 && currentT < 5){
    return 3;
  } else if (currentT >= 5 && currentT < 7){
    return 4;
  } else if (currentT >= 7 && currentT < 9){
    return 5;
  } else if (currentT >= 9 && currentT < 11){
    return 6;
  } else if (currentT >= 11 && currentT < 13){
    return 7;
  } else if (currentT >= 13 && currentT < 15){
    return 8;
  } else if (currentT >= 15 && currentT < 17){
    return 9;
  } else if (currentT >= 17 && currentT < 19){
    return 10;
  } else if (currentT >= 19 && currentT < 21){
    return 11;
  } else if (currentT >= 21 && currentT < 23){
    return 12;
  }
}

let timeCode = getTimeCode();

const [time, setTime] = useState(timeCode);

useEffect(() => {
  const interval = setInterval(() => setTime(timeCode), 1000 );
  return () => {
    clearInterval(interval);
  };
}, []);

function getFirstTri(){
  return (moonTimes.month + moonTimes.day + yearCode + timeCode) % 8;
}
function getSecondTri(){
 return (moonTimes.month + moonTimes.day + yearCode) % 8;
}
function getX(){
 return (moonTimes.month + moonTimes.day + yearCode + timeCode) % 6;
}


let firstTri = getFirstTri(); 
let secondTri = getSecondTri(); 
let x = getX();


function getHexNum(){
    if (firstTri === 1 && secondTri === 1){
    return 1;
    } 
    else if (firstTri === 0 && secondTri === 0){
    return 2;
    }
    else if (firstTri === 4 && secondTri === 6){
    return 3;
    }
    else if (firstTri === 6 && secondTri === 7){
    return 4;
    }
    else if (firstTri === 1 && secondTri === 6){
    return 5;
    }
    else if (firstTri === 6 && secondTri === 1){
    return 6;
    }
    else if (firstTri === 6 && secondTri === 0){
    return 7;
    }
    else if (firstTri === 0 && secondTri === 6){
    return 8;
    }
    else if (firstTri === 1 && secondTri === 5){
    return 9;
    }
    else if (firstTri === 2 && secondTri === 1){
        return 10;
    }
    else if (firstTri === 1 && secondTri === 0){
        return 11;
    }
    else if (firstTri === 0 && secondTri === 1){
        return 12;
    }
    else if (firstTri === 3 && secondTri === 1){
        return 13;
    }
    else if (firstTri === 1 && secondTri === 3){
        return 14;
    }
    else if (firstTri === 7 && secondTri === 0){
        return 15;
    }
    else if (firstTri === 0 && secondTri === 4){
        return 16;
    }
    else if (firstTri === 4 && secondTri === 2){
        return 17;
    }
    else if (firstTri === 5 && secondTri === 7){
        return 18;
    }
    else if (firstTri === 2 && secondTri === 0){
        return 19;
    }
    else if (firstTri === 0 && secondTri === 5){
        return 20;
    }
    else if (firstTri === 4 && secondTri === 3){
        return 21;
    }
    else if (firstTri === 3 && secondTri === 7){
        return 22;
    }
    else if (firstTri === 0 && secondTri === 7){
        return 23;
    }
    else if (firstTri === 4 && secondTri === 0){
        return 24;
    }
    else if (firstTri === 4 && secondTri === 1){
        return 25;
    }
    else if (firstTri === 1 && secondTri === 7){
        return 26;
    }
    else if (firstTri === 4 && secondTri === 7){
        return 27;
    }
    else if (firstTri === 5 && secondTri === 2){
        return 28;
    }
    else if (firstTri === 6 && secondTri === 6){
        return 29;
    }
    else if (firstTri === 3 && secondTri === 3){
        return 30;
    }
    else if (firstTri === 7 && secondTri === 2){
        return 31;
    }
    else if (firstTri === 5 && secondTri === 4){
        return 32;
    }
    else if (firstTri === 7 && secondTri === 1){
        return 33;
    }
    else if (firstTri === 1 && secondTri === 4){
        return 34;
    }
    else if (firstTri === 0 && secondTri === 3){
        return 35;
    }
    else if (firstTri === 3 && secondTri === 0){
        return 36;
    }
     else if (firstTri === 3 && secondTri === 5){
        return 37;
    }
     else if (firstTri === 2 && secondTri === 3){
        return 38;
    }
     else if (firstTri === 7 && secondTri === 6){
         return 39;
        }
    else if (firstTri === 6 && secondTri === 4){
        return 40;
    }
     else if (firstTri === 2 && secondTri === 7){
        return 41;
    }
     else if (firstTri === 4 && secondTri === 5){
         return 42;
    }
    else if (firstTri === 1 && secondTri === 2){
        return 43;
    }
     else if (firstTri === 5 && secondTri === 1){
        return 44;
    }
    else if (firstTri === 0 && secondTri === 2){
        return 45;
    }
     else if (firstTri === 5 && secondTri === 0){
        return 46;
    }
     else if (firstTri === 6 && secondTri === 2){
        return 47;
    }
    else if (firstTri === 5 && secondTri === 6){
        return 48;
    }
     else if (firstTri === 3 && secondTri === 2){
        return 49;
    }
     else if (firstTri === 5 && secondTri === 3){
        return 50;
    }
     else if (firstTri === 4 && secondTri === 4){
        return 51;
    }
    else if (firstTri === 7 && secondTri === 7){
        return 52;
    }
    else if (firstTri === 7 && secondTri === 5){
        return 53;
    }
    else if (firstTri === 2 && secondTri === 4){
        return 54;
    }
    else if (firstTri === 3 && secondTri === 4){
        return 55;
    }
    else if (firstTri === 7 && secondTri === 3){
        return 56;
    }
    else if (firstTri === 5 && secondTri === 5){
        return 57;
    }
    else if (firstTri === 2 && secondTri === 2){
        return 58;
    }
    else if (firstTri === 6 && secondTri === 5){
        return 59;
    }
    else if (firstTri === 2 && secondTri === 6){
         return 60;
    }
    else if (firstTri === 2 && secondTri === 5){
        return 61;
    }
    else if (firstTri === 7 && secondTri === 4){
        return 62;
    }
    else if (firstTri === 3 && secondTri === 6){
        return 63;
    }
    else if (firstTri === 6 && secondTri === 3){
        return 64;
    }
}

let hexNumOne = getHexNum();

function getHexNum2(){
    if (hexNumOne === 1 && x === 1){
        return 44
    } else if (hexNumOne === 1 && x === 2){
        return 13;
    } else if (hexNumOne === 1 && x === 3){
        return 10;
    } else if (hexNumOne === 1 && x === 4){
        return 9;
    } else if (hexNumOne === 1 && x === 5){
        return 14;
    } else if (hexNumOne === 1 && x === 0){
        return 43;
    } else if (hexNumOne === 2 && x === 1){
        return 24;
    } else if (hexNumOne === 2 && x === 2){
        return 7;
    } else if (hexNumOne === 2 && x === 3){
        return 15;
    } else if (hexNumOne === 2 && x === 4){
        return 16;
    } else if (hexNumOne === 2 && x === 5){
        return 8;
    } else if (hexNumOne === 2 && x === 0){
        return 23;
    } else if (hexNumOne === 3 && x === 1){
        return 8;
    } else if (hexNumOne === 3 && x === 2){
        return 60;
    } else if (hexNumOne === 3 && x === 3){
        return 63;
    } else if (hexNumOne === 3 && x === 4){
        return 17;
    } else if (hexNumOne === 3 && x === 5){
        return 24;
    } else if (hexNumOne === 3 && x === 0){
        return 42;
    } else if (hexNumOne === 4 && x === 1){
        return 41;
    } else if (hexNumOne === 4 && x === 2){
        return 23;
    } else if (hexNumOne === 4 && x === 3){
        return 18;
    } else if (hexNumOne === 4 && x === 4){
        return 64;
    } else if (hexNumOne === 4 && x === 5){
        return 59;
    } else if (hexNumOne === 4 && x === 0){
        return 7;
    } else if (hexNumOne === 5 && x === 1){
        return 48;
    } else if (hexNumOne === 5 && x === 2){
        return 63;
    } else if (hexNumOne === 5 && x === 3){
        return 60;
    } else if (hexNumOne === 5 && x === 4){
        return 43;
    } else if (hexNumOne === 5 && x === 5){
        return 11;
    } else if (hexNumOne === 5 && x === 0){
        return 9;
    } else if (hexNumOne === 6 && x === 1){
        return 10;
    } else if (hexNumOne === 6 && x === 2){
        return 12;
    } else if (hexNumOne === 6 && x === 3){
        return 44;
    } else if (hexNumOne === 6 && x === 4){
        return 59;
    } else if (hexNumOne === 6 && x === 5){
        return 64;
    } else if (hexNumOne === 6 && x === 0){
        return 47;
    } else if (hexNumOne === 7 && x === 1){
        return 19;
    } else if (hexNumOne === 7 && x === 2){
        return 2;
    } else if (hexNumOne === 7 && x === 3){
        return 46;
    } else if (hexNumOne === 7 && x === 4){
        return 40;
    } else if (hexNumOne === 7 && x === 5){
        return 29;
    } else if (hexNumOne === 7 && x === 0){
        return 4;
    } else if (hexNumOne === 8 && x === 1){
        return 3;
    } else if (hexNumOne === 8 && x === 2){
        return 29;
    } else if (hexNumOne === 8 && x === 3){
        return 39;
    } else if (hexNumOne === 8 && x === 4){
        return 45;
    } else if (hexNumOne === 8 && x === 5){
        return 2;
    } else if (hexNumOne === 8 && x === 0){
        return 20;
    } else if (hexNumOne === 9 && x === 1){
        return 57;
    } else if (hexNumOne === 9 && x === 2){
        return 37;
    } else if (hexNumOne === 9 && x === 3){
        return 61;
    } else if (hexNumOne === 9 && x === 4){
        return 1;
    } else if (hexNumOne === 9 && x === 5){
        return 26;
    } else if (hexNumOne === 9 && x === 0){
        return 5;
    } else if (hexNumOne === 10 && x === 1){
        return 6;
    } else if (hexNumOne === 10 && x === 2){
        return 25;
    } else if (hexNumOne === 10 && x === 3){
        return 1;
    } else if (hexNumOne === 10 && x === 4){
        return 61;
    } else if (hexNumOne === 10 && x === 5){
        return 38;
    } else if (hexNumOne === 10 && x === 0){
        return 58;
    } else if (hexNumOne === 11 && x === 1){
        return 46;
    } else if (hexNumOne === 11 && x === 2){
        return 37;
    } else if (hexNumOne === 11 && x === 3){
        return 61;
    } else if (hexNumOne === 11 && x === 4){
        return 34;
    } else if (hexNumOne === 11 && x === 5){
        return 5;
    } else if (hexNumOne === 11 && x === 0){
        return 26;
    } else if (hexNumOne === 12 && x === 1){
        return 25;
    } else if (hexNumOne === 12 && x === 2){
        return 6;
    } else if (hexNumOne === 12 && x === 3){
        return 33;
    } else if (hexNumOne === 12 && x === 4){
        return 20;
    } else if (hexNumOne === 12 && x === 5){
        return 35;
    } else if (hexNumOne === 12 && x === 0){
        return 45;
    } else if (hexNumOne === 13 && x === 1){
        return 33;
    } else if (hexNumOne === 13 && x === 2){
        return 1;
    } else if (hexNumOne === 13 && x === 3){
        return 25;
    } else if (hexNumOne === 13 && x === 4){
        return 37;
    } else if (hexNumOne === 13 && x === 5){
        return 30;
    } else if (hexNumOne === 13 && x === 0){
        return 49;
    } else if (hexNumOne === 14 && x === 1){
        return 50;
    } else if (hexNumOne === 14 && x === 2){
        return 30;
    } else if (hexNumOne === 14 && x === 3){
        return 38;
    } else if (hexNumOne === 14 && x === 4){
        return 26;
    } else if (hexNumOne === 14 && x === 5){
        return 9;
    } else if (hexNumOne === 14 && x === 0){
        return 34;
    } else if (hexNumOne === 15 && x === 1){
        return 36;
    } else if (hexNumOne === 15 && x === 2){
        return 46;
    } else if (hexNumOne === 15 && x === 3){
        return 2;
    } else if (hexNumOne === 15 && x === 4){
        return 62;
    } else if (hexNumOne === 15 && x === 5){
        return 39;
    } else if (hexNumOne === 15 && x === 0){
        return 52;
    } else if (hexNumOne === 16 && x === 1){
        return 51;
    } else if (hexNumOne === 16 && x === 2){
        return 40;
    } else if (hexNumOne === 16 && x === 3){
        return 62;
    } else if (hexNumOne === 16 && x === 4){
        return 2;
    } else if (hexNumOne === 16 && x === 5){
        return 45;
    } else if (hexNumOne === 16 && x === 0){
        return 35;
    } else if (hexNumOne === 17 && x === 1){
        return 45;
    } else if (hexNumOne === 17 && x === 2){
        return 58;
    } else if (hexNumOne === 17 && x === 3){
        return 49;
    } else if (hexNumOne === 17 && x === 4){
        return 3;
    } else if (hexNumOne === 17 && x === 5){
        return 51;
    } else if (hexNumOne === 17 && x === 0){
        return 25;
    } else if (hexNumOne === 18 && x === 1){
        return 26;
    } else if (hexNumOne === 18 && x === 2){
        return 52;
    } else if (hexNumOne === 18 && x === 3){
        return 4;
    } else if (hexNumOne === 18 && x === 4){
        return 50;
    } else if (hexNumOne === 18 && x === 5){
        return 57;
    } else if (hexNumOne === 18 && x === 0){
        return 46;
    } else if (hexNumOne === 19 && x === 1){
        return 7;
    } else if (hexNumOne === 19 && x === 2){
        return 24;
    } else if (hexNumOne === 19 && x === 3){
        return 36;
    } else if (hexNumOne === 19 && x === 4){
        return 54;
    } else if (hexNumOne === 19 && x === 5){
        return 60;
    } else if (hexNumOne === 19 && x === 0){
        return 41;
    } else if (hexNumOne === 20 && x === 1){
        return 42;
    } else if (hexNumOne === 20 && x === 2){
        return 59;
    } else if (hexNumOne === 20 && x === 3){
        return 53;
    } else if (hexNumOne === 20 && x === 4){
        return 12;
    } else if (hexNumOne === 20 && x === 5){
        return 23;
    } else if (hexNumOne === 20 && x === 0){
        return 8;
    } else if (hexNumOne === 21 && x === 1){
        return 35;
    } else if (hexNumOne === 21 && x === 2){
        return 38;
    } else if (hexNumOne === 21 && x === 3){
        return 30;
    } else if (hexNumOne === 21 && x === 4){
        return 27;
    } else if (hexNumOne === 21 && x === 5){
        return 25;
    } else if (hexNumOne === 21 && x === 0){
        return 51;
    } else if (hexNumOne === 22 && x === 1){
        return 52;
    } else if (hexNumOne === 22 && x === 2){
        return 26;
    } else if (hexNumOne === 22 && x === 3){
        return 27;
    } else if (hexNumOne === 22 && x === 4){
        return 30;
    } else if (hexNumOne === 22 && x === 5){
        return 37;
    } else if (hexNumOne === 22 && x === 0){
        return 36;
    } else if (hexNumOne === 23 && x === 1){
        return 27;
    } else if (hexNumOne === 23 && x === 2){
        return 4;
    } else if (hexNumOne === 23 && x === 3){
        return 52;
    } else if (hexNumOne === 23 && x === 4){
        return 35;
    } else if (hexNumOne === 23 && x === 5){
        return 20;
    } else if (hexNumOne === 23 && x === 0){
        return 2;
    } else if (hexNumOne === 24 && x === 1){
        return 2;
    } else if (hexNumOne === 24 && x === 2){
        return 19;
    } else if (hexNumOne === 24 && x === 3){
        return 36;
    } else if (hexNumOne === 24 && x === 4){
        return 51;
    } else if (hexNumOne === 24 && x === 5){
        return 3;
    } else if (hexNumOne === 24 && x === 0){
        return 27;
    } else if (hexNumOne === 25 && x === 1){
        return 12;
    } else if (hexNumOne === 25 && x === 2){
        return 10;
    } else if (hexNumOne === 25 && x === 3){
        return 13;
    } else if (hexNumOne === 25 && x === 4){
        return 42;
    } else if (hexNumOne === 25 && x === 5){
        return 21;
    } else if (hexNumOne === 25 && x === 0){
        return 17;
    } else if (hexNumOne === 26 && x === 1){
        return 18;
    } else if (hexNumOne === 26 && x === 2){
        return 22;
    } else if (hexNumOne === 26 && x === 3){
        return 41;
    } else if (hexNumOne === 26 && x === 4){
        return 14;
    } else if (hexNumOne === 26 && x === 5){
        return 9;
    } else if (hexNumOne === 26 && x === 0){
        return 11;
    } else if (hexNumOne === 27 && x === 1){
        return 23;
    } else if (hexNumOne === 27 && x === 2){
        return 41;
    } else if (hexNumOne === 27 && x === 3){
        return 22;
    } else if (hexNumOne === 27 && x === 4){
        return 21;
    } else if (hexNumOne === 27 && x === 5){
        return 42;
    } else if (hexNumOne === 27 && x === 0){
        return 24;
    } else if (hexNumOne === 28 && x === 1){
        return 43;
    } else if (hexNumOne === 28 && x === 2){
        return 31;
    } else if (hexNumOne === 28 && x === 3){
        return 47;
    } else if (hexNumOne === 28 && x === 4){
        return 48;
    } else if (hexNumOne === 28 && x === 5){
        return 32;
    } else if (hexNumOne === 28 && x === 0){
        return 44;
    } else if (hexNumOne === 29 && x === 1){
        return 60;
    } else if (hexNumOne === 29 && x === 2){
        return 8;
    } else if (hexNumOne === 29 && x === 3){
        return 48;
    } else if (hexNumOne === 29 && x === 4){
        return 47;
    } else if (hexNumOne === 29 && x === 5){
        return 15;
    } else if (hexNumOne === 29 && x === 0){
        return 59;
    } else if (hexNumOne === 30 && x === 1){
        return 56;
    } else if (hexNumOne === 30 && x === 2){
        return 14;
    } else if (hexNumOne === 30 && x === 3){
        return 21;
    } else if (hexNumOne === 30 && x === 4){
        return 22;
    } else if (hexNumOne === 30 && x === 5){
        return 37;
    } else if (hexNumOne === 30 && x === 0){
        return 55;
    } else if (hexNumOne === 31 && x === 1){
        return 49;
    } else if (hexNumOne === 31 && x === 2){
        return 28;
    } else if (hexNumOne === 31 && x === 3){
        return 45;
    } else if (hexNumOne === 31 && x === 4){
        return 47;
    } else if (hexNumOne === 31 && x === 5){
        return 52;
    } else if (hexNumOne === 31 && x === 0){
        return 33;
    } else if (hexNumOne === 32 && x === 1){
        return 34;
    } else if (hexNumOne === 32 && x === 2){
        return 62;
    } else if (hexNumOne === 32 && x === 3){
        return 40;
    } else if (hexNumOne === 32 && x === 4){
        return 46;
    } else if (hexNumOne === 32 && x === 5){
        return 28;
    } else if (hexNumOne === 32 && x === 0){
        return 50;
    } else if (hexNumOne === 33 && x === 1){
        return 13;
    } else if (hexNumOne === 33 && x === 2){
        return 44;
    } else if (hexNumOne === 33 && x === 3){
        return 12;
    } else if (hexNumOne === 33 && x === 4){
        return 53;
    } else if (hexNumOne === 33 && x === 5){
        return 56;
    } else if (hexNumOne === 33 && x === 0){
        return 31;
    } else if (hexNumOne === 34 && x === 1){
        return 32;
    } else if (hexNumOne === 34 && x === 2){
        return 55;
    } else if (hexNumOne === 34 && x === 3){
        return 54;
    } else if (hexNumOne === 34 && x === 4){
        return 11;
    } else if (hexNumOne === 34 && x === 5){
        return 43;
    } else if (hexNumOne === 34 && x === 0){
        return 14;
    } else if (hexNumOne === 35 && x === 1){
        return 21;
    } else if (hexNumOne === 35 && x === 2){
        return 64;
    } else if (hexNumOne === 35 && x === 3){
        return 56;
    } else if (hexNumOne === 35 && x === 4){
        return 23;
    } else if (hexNumOne === 35 && x === 5){
        return 12;
    } else if (hexNumOne === 35 && x === 0){
        return 15;
    } else if (hexNumOne === 36 && x === 1){
        return 15;
    } else if (hexNumOne === 36 && x === 2){
        return 11;
    } else if (hexNumOne === 36 && x === 3){
        return 24;
    } else if (hexNumOne === 36 && x === 4){
        return 55;
    } else if (hexNumOne === 36 && x === 5){
        return 63;
    } else if (hexNumOne === 36 && x === 0){
        return 22;
    } else if (hexNumOne === 37 && x === 1){
        return 53;
    } else if (hexNumOne === 37 && x === 2){
        return 9;
    } else if (hexNumOne === 37 && x === 3){
        return 42;
    } else if (hexNumOne === 37 && x === 4){
        return 13;
    } else if (hexNumOne === 37 && x === 5){
        return 22;
    } else if (hexNumOne === 37 && x === 0){
        return 63;
    } else if (hexNumOne === 38 && x === 1){
        return 64;
    } else if (hexNumOne === 38 && x === 2){
        return 21;
    } else if (hexNumOne === 38 && x === 3){
        return 14;
    } else if (hexNumOne === 38 && x === 4){
        return 41;
    } else if (hexNumOne === 38 && x === 5){
        return 10;
    } else if (hexNumOne === 38 && x === 0){
        return 54;
    } else if (hexNumOne === 39 && x === 1){
        return 63;
    } else if (hexNumOne === 39 && x === 2){
        return 48;
    } else if (hexNumOne === 39 && x === 3){
        return 8;
    } else if (hexNumOne === 39 && x === 4){
        return 31;
    } else if (hexNumOne === 39 && x === 5){
        return 15;
    } else if (hexNumOne === 39 && x === 0){
        return 53;
    } else if (hexNumOne === 40 && x === 1){
        return 54;
    } else if (hexNumOne === 40 && x === 2){
        return 16;
    } else if (hexNumOne === 40 && x === 3){
        return 32;
    } else if (hexNumOne === 40 && x === 4){
        return 7;
    } else if (hexNumOne === 40 && x === 5){
        return 47;
    } else if (hexNumOne === 40 && x === 0){
        return 64;
    } else if (hexNumOne === 41 && x === 1){
        return 4;
    } else if (hexNumOne === 41 && x === 2){
        return 27;
    } else if (hexNumOne === 41 && x === 3){
        return 26;
    } else if (hexNumOne === 41 && x === 4){
        return 38;
    } else if (hexNumOne === 41 && x === 5){
        return 61;
    } else if (hexNumOne === 41 && x === 0){
        return 19;
    } else if (hexNumOne === 42 && x === 1){
        return 20;
    } else if (hexNumOne === 42 && x === 2){
        return 61;
    } else if (hexNumOne === 42 && x === 3){
        return 37;
    } else if (hexNumOne === 42 && x === 4){
        return 25;
    } else if (hexNumOne === 42 && x === 5){
        return 27;
    } else if (hexNumOne === 42 && x === 0){
        return 3;
    } else if (hexNumOne === 43 && x === 1){
        return 28;
    } else if (hexNumOne === 43 && x === 2){
        return 49;
    } else if (hexNumOne === 43 && x === 3){
        return 58;
    } else if (hexNumOne === 43 && x === 4){
        return 5;
    } else if (hexNumOne === 43 && x === 5){
        return 34;
    } else if (hexNumOne === 43 && x === 0){
        return 1;
    } else if (hexNumOne === 44 && x === 1){
        return 1;
    } else if (hexNumOne === 44 && x === 2){
        return 33;
    } else if (hexNumOne === 44 && x === 3){
        return 6;
    } else if (hexNumOne === 44 && x === 4){
        return 57;
    } else if (hexNumOne === 44 && x === 5){
        return 50;
    } else if (hexNumOne === 44 && x === 0){
        return 28;
    } else if (hexNumOne === 45 && x === 1){
        return 17;
    } else if (hexNumOne === 45 && x === 2){
        return 47;
    } else if (hexNumOne === 45 && x === 3){
        return 31;
    } else if (hexNumOne === 45 && x === 4){
        return 8;
    } else if (hexNumOne === 45 && x === 5){
        return 16;
    } else if (hexNumOne === 45 && x === 0){
        return 12;
    } else if (hexNumOne === 46 && x === 1){
        return 11;
    } else if (hexNumOne === 46 && x === 2){
        return 15;
    } else if (hexNumOne === 46 && x === 3){
        return 7;
    } else if (hexNumOne === 46 && x === 4){
        return 32;
    } else if (hexNumOne === 46 && x === 5){
        return 48;
    } else if (hexNumOne === 46 && x === 0){
        return 18;
    } else if (hexNumOne === 47 && x === 1){
        return 58;
    } else if (hexNumOne === 47 && x === 2){
        return 45;
    } else if (hexNumOne === 47 && x === 3){
        return 28;
    } else if (hexNumOne === 47 && x === 4){
        return 29;
    } else if (hexNumOne === 47 && x === 5){
        return 40;
    } else if (hexNumOne === 47 && x === 0){
        return 6;
    } else if (hexNumOne === 48 && x === 1){
        return 5;
    } else if (hexNumOne === 48 && x === 2){
        return 39;
    } else if (hexNumOne === 48 && x === 3){
        return 29;
    } else if (hexNumOne === 48 && x === 4){
        return 28;
    } else if (hexNumOne === 48 && x === 5){
        return 46;
    } else if (hexNumOne === 48 && x === 0){
        return 57;
    } else if (hexNumOne === 49 && x === 1){
        return 31;
    } else if (hexNumOne === 49 && x === 2){
        return 43;
    } else if (hexNumOne === 49 && x === 3){
        return 17;
    } else if (hexNumOne === 49 && x === 4){
        return 63;
    } else if (hexNumOne === 49 && x === 5){
        return 55;
    } else if (hexNumOne === 49 && x === 0){
        return 13;
    } else if (hexNumOne === 50 && x === 1){
        return 14;
    } else if (hexNumOne === 50 && x === 2){
        return 56;
    } else if (hexNumOne === 50 && x === 3){
        return 64;
    } else if (hexNumOne === 50 && x === 4){
        return 18;
    } else if (hexNumOne === 50 && x === 5){
        return 44;
    } else if (hexNumOne === 50 && x === 0){
        return 32;
    } else if (hexNumOne === 51 && x === 1){
        return 16;
    } else if (hexNumOne === 51 && x === 2){
        return 54;
    } else if (hexNumOne === 51 && x === 3){
        return 55;
    } else if (hexNumOne === 51 && x === 4){
        return 24;
    } else if (hexNumOne === 51 && x === 5){
        return 17;
    } else if (hexNumOne === 51 && x === 0){
        return 21;
    } else if (hexNumOne === 52 && x === 1){
        return 22;
    } else if (hexNumOne === 52 && x === 2){
        return 18;
    } else if (hexNumOne === 52 && x === 3){
        return 23;
    } else if (hexNumOne === 52 && x === 4){
        return 56;
    } else if (hexNumOne === 52 && x === 5){
        return 53;
    } else if (hexNumOne === 52 && x === 0){
        return 15;
    } else if (hexNumOne === 53 && x === 1){
        return 37;
    } else if (hexNumOne === 53 && x === 2){
        return 57;
    } else if (hexNumOne === 53 && x === 3){
        return 20;
    } else if (hexNumOne === 53 && x === 4){
        return 33;
    } else if (hexNumOne === 53 && x === 5){
        return 52;
    } else if (hexNumOne === 53 && x === 0){
        return 39;
    } else if (hexNumOne === 54 && x === 1){
        return 40;
    } else if (hexNumOne === 54 && x === 2){
        return 51;
    } else if (hexNumOne === 54 && x === 3){
        return 34;
    } else if (hexNumOne === 54 && x === 4){
        return 19;
    } else if (hexNumOne === 54 && x === 5){
        return 58;
    } else if (hexNumOne === 54 && x === 0){
        return 38;
    } else if (hexNumOne === 55 && x === 1){
        return 62;
    } else if (hexNumOne === 55 && x === 2){
        return 34;
    } else if (hexNumOne === 55 && x === 3){
        return 51;
    } else if (hexNumOne === 55 && x === 4){
        return 36;
    } else if (hexNumOne === 55 && x === 5){
        return 49;
    } else if (hexNumOne === 55 && x === 0){
        return 30;
    } else if (hexNumOne === 56 && x === 1){
        return 30;
    } else if (hexNumOne === 56 && x === 2){
        return 50;
    } else if (hexNumOne === 56 && x === 3){
        return 35;
    } else if (hexNumOne === 56 && x === 4){
        return 52;
    } else if (hexNumOne === 56 && x === 5){
        return 33;
    } else if (hexNumOne === 56 && x === 0){
        return 62;
    } else if (hexNumOne === 57 && x === 1){
        return 9;
    } else if (hexNumOne === 57 && x === 2){
        return 53;
    } else if (hexNumOne === 57 && x === 3){
        return 59;
    } else if (hexNumOne === 57 && x === 4){
        return 44;
    } else if (hexNumOne === 57 && x === 5){
        return 18;
    } else if (hexNumOne === 57 && x === 0){
        return 48;
    } else if (hexNumOne === 58 && x === 1){
        return 47;
    } else if (hexNumOne === 58 && x === 2){
        return 17;
    } else if (hexNumOne === 58 && x === 3){
        return 43;
    } else if (hexNumOne === 58 && x === 4){
        return 60;
    } else if (hexNumOne === 58 && x === 5){
        return 54;
    } else if (hexNumOne === 58 && x === 0){
        return 10;
    } else if (hexNumOne === 59 && x === 1){
        return 61;
    } else if (hexNumOne === 59 && x === 2){
        return 20;
    } else if (hexNumOne === 59 && x === 3){
        return 57;
    } else if (hexNumOne === 59 && x === 4){
        return 6;
    } else if (hexNumOne === 59 && x === 5){
        return 4;
    } else if (hexNumOne === 59 && x === 0){
        return 29;
    } else if (hexNumOne === 60 && x === 1){
        return 29;
    } else if (hexNumOne === 60 && x === 2){
        return 3;
    } else if (hexNumOne === 60 && x === 3){
        return 5;
    } else if (hexNumOne === 60 && x === 4){
        return 58;
    } else if (hexNumOne === 60 && x === 5){
        return 19;
    } else if (hexNumOne === 60 && x === 0){
        return 61;
    } else if (hexNumOne === 61 && x === 1){
        return 59;
    } else if (hexNumOne === 61 && x === 2){
        return 42;
    } else if (hexNumOne === 61 && x === 3){
        return 9;
    } else if (hexNumOne === 61 && x === 4){
        return 10;
    } else if (hexNumOne === 61 && x === 5){
        return 41;
    } else if (hexNumOne === 61 && x === 0){
        return 60;
    } else if (hexNumOne === 62 && x === 1){
        return 55;
    } else if (hexNumOne === 62 && x === 2){
        return 32;
    } else if (hexNumOne === 62 && x === 3){
        return 16;
    } else if (hexNumOne === 62 && x === 4){
        return 15;
    } else if (hexNumOne === 62 && x === 5){
        return 31;
    } else if (hexNumOne === 62 && x === 0){
        return 56;
    } else if (hexNumOne === 63 && x === 1){
        return 39;
    } else if (hexNumOne === 63 && x === 2){
        return 5;
    } else if (hexNumOne === 63 && x === 3){
        return 3;
    } else if (hexNumOne === 63 && x === 4){
        return 49;
    } else if (hexNumOne === 63 && x === 5){
        return 36;
    } else if (hexNumOne === 63 && x === 0){
        return 37;
    } else if (hexNumOne === 64 && x === 1){
        return 38;
    } else if (hexNumOne === 64 && x === 2){
        return 35;
    } else if (hexNumOne === 64 && x === 3){
        return 50;
    } else if (hexNumOne === 64 && x === 4){
        return 4;
    } else if (hexNumOne === 64 && x === 5){
        return 6;
    } else if (hexNumOne === 64 && x === 0){
        return 40;
    }
        
}

let hexNumTwo = getHexNum2();

function getHexNumNuc(){
    if (hexNumOne === 1 || hexNumOne === 43 ||hexNumOne === 44 || hexNumOne === 28){
        return 1;
    } else if (hexNumOne === 2 || hexNumOne === 23 || hexNumOne === 24 || hexNumOne === 27 || hexNumOne === 23 || hexNumOne === 24 || hexNumOne === 27){
        return 2;
    } else if (hexNumOne === 3 || hexNumOne === 8 || hexNumOne === 20 || hexNumOne === 42){
        return 23;
    } else if (hexNumOne === 4 || hexNumOne === 7 || hexNumOne === 19 || hexNumOne === 41){
    return 24;
    } else if (hexNumOne === 29 || hexNumOne === 59 || hexNumOne === 60 || hexNumOne === 61){
    return 27;
    } else if (hexNumOne === 30 || hexNumOne === 55 || hexNumOne === 56 || hexNumOne === 62){
    return 28;
    } else if (hexNumOne === 6 || hexNumOne === 10 || hexNumOne === 47 || hexNumOne === 58){
    return 37;
    } else if (hexNumOne === 5 || hexNumOne === 9 || hexNumOne === 48 || hexNumOne === 57){
    return 38;
    } else if (hexNumOne === 16 || hexNumOne === 21 || hexNumOne === 35 || hexNumOne === 51){
    return 39;
    } else if (hexNumOne === 15 || hexNumOne === 22 || hexNumOne === 36 || hexNumOne === 52){
    return 40;
    } else if (hexNumOne === 14 || hexNumOne === 32 || hexNumOne === 34 || hexNumOne === 50){
    return 43;
    } else if (hexNumOne === 13 || hexNumOne === 31 || hexNumOne === 33 || hexNumOne === 49){
    return 44;
    } else if (hexNumOne === 12 || hexNumOne === 17 || hexNumOne === 25 || hexNumOne === 45){
    return 53;
    } else if (hexNumOne === 11 || hexNumOne === 18 || hexNumOne === 26 || hexNumOne === 46){
    return 54;
    } else if (hexNumOne === 38 || hexNumOne === 40 || hexNumOne === 54 || hexNumOne === 64){
    return 63;
    } else if (hexNumOne === 37 || hexNumOne === 39 || hexNumOne === 53 || hexNumOne === 63){
    return 64;
    }
}

let hexNumNuc = getHexNumNuc();

console.log({datetime})
return (
<>
    <div className='datetime-bar'>
        <input className="date-selector" 
        type="datetime-local"
        onChange={e => setDateTime(e.target.value)}/>
    <div className='greg'>
        ☉
        {currentM}/{currentD}/{currentY}
    </div>
    <div 
    className='luna'
    >
        ☾
        {moonTimes.month}/{moonTimes.day}/{moonTimes.year} {cz.character} {cz.mm_name} {cz.name} {yearCode}
    </div>
    <div 
    className='time'>
        UT: {(currentT < 10 ? '0' : '') + currentT}:{(now.getUTCMinutes() < 10 ? '0' : '') + now.getMinutes()} - {timeCode}
        <button>Prev</button>
        <button>Next</button>
    </div> 
    <div onClick={handleClick} className='blossoms'>
        {wilHex[(hexNumOne -1)].hex}
    <span className='x'>x:{x}</span>
    <span>
        {wilHex[(hexNumTwo -1)].hex}{wilHex[(hexNumNuc -1)].hex}
    </span>
    </div>
    </div>
    {isShown && <FivePlum
    wilHex={wilHex}
    hexNumOne={hexNumOne}
    hexNumTwo={hexNumTwo}
    hexNumNuc={hexNumNuc}
    />
    }
</>
    )
}
// Write a form to input a specific gregorian date / time that is default to the current date / time.

// Replace the number specifying the changing line with logic to change the position of x to align with the changing line.

// write handler to increment timeCode up / down. Render updated date / time for blossoms shown.

// write function for toggleBlossomHandler.