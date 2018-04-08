//convets Decimal input to Hexadecimal  and returns output
export function toHex(n) {
    let temp;
    let hex = [];
    let i;
    //If the input is Decimal, convert it to hex
    for(i = 0; n != 0; i++){
      temp = n % 16;
      //Assigning the dividend to be the quotient to be used later
      n = Math.floor(n/16);
      switch(temp){
        case 10:
          hex.unshift('A');
          break;
        case 11:
          hex.unshift('B');
          break;
        case 12:
          hex.unshift('C');
          break;
        case 13:
          hex.unshift('D');
          break;
        case 14:
          hex.unshift('E');
          break;
        case 15:
          hex.unshift('F');
          break;
        default:
          hex.unshift(temp);
      }
    }
    return hex.join("");
}

//Converts Decimal to binary output
export function  toBinary(n) {
    let temp;
    let decimal = [];
    let binary  = [];
    let i;
    //if input is of type decimal
    for(i = 0; n != 0; i++){
      temp = n % 2; //Find remainder
      decimal.unshift(temp); //Append remainder to array
      n = Math.floor(n/2); //Assigning the dividend to be the quotient to be used later
    }
    if(document.getElementById("fromNeg").checked){
      decimal.unshift(0);
      decimal.unshift(0);
    }
    return decimal.join("");
}
//Converts Hexadecimal input into Decimal output
export function hexToDec(USERINPUT){
    let n = 0;
    let length = USERINPUT.toString().length - 1;
    let string = USERINPUT.toString();
    let j, i;
    //For(i elements in userinput, multiply string[i] by 16^j)
    for(i = 0, j = length; i <= length && j >= 0; i++, j--){
      //case a-f = 10-15 which is then multiplied by 16^i
      //else take 1-9 and do the same as above, adding the results
      switch (string[i]) {
        case "A":
          n = n + (10 * (Math.pow(16, j)  ) )
          break;
        case "B":
          n = n + (11 * (Math.pow(16, j)  ) )
          break;
        case "C":
          n = n + (12 * (Math.pow(16, j)  ) )
          break;
        case "D":
          n = n + (13 * (Math.pow(16, j)  ) )
          break;
        case "E":
          n = n + (14 * (Math.pow(16, j)  ) )
          break;
        case "F":
          n = n + (15 * (Math.pow(16, j)  ) )
          break;
        default:
          n = n + (parseInt(string[i]) * (Math.pow(16, j) ) );
      }
    }
    return  n;
}

//helper function, counts the number of ' ' or '.' in binary input
function counter(string, length){
  let n = 0 //be the number of periods or spaces in string
  let i;
  for(i = 0; i < length; i++){
    if(string[i] === "." || string[i] === " "){n++;}
  }
  return n;
}

//Converts binary input to Decimal output
export function binToDec(USERINPUT){
    let n = 0;
    let length = USERINPUT.toString().length - 1;
    let string = USERINPUT.toString();
    let i;
    let j;
    length = length - counter(string, length);
    for(i = 0, j = length; j >= 0; i++, j--){
      switch (string[i]) {
        case "1":
          n = n + (1 * (Math.pow(2, j)  ) )
          break;
        case " ":
          j++;
          break;
        case ".":
          j++;
          break;
        default:
          break;
      }
    }
    return  n;
}

export function hexToBin(USERINPUT){
  let hex1   = [];
  let length = USERINPUT.toString().length;
  let string = USERINPUT.toString();
  let i;
  for(i = 0; i < length; i++){
    console.log(i);
    console.log(string[i]);
    switch (string[i]) {
      case "A":
        hex1.push('1010');
        break;
      case "B":
        hex1.push('1011');
        break;
      case "C":
        hex1.push('1100');
        break;
      case "D":
        hex1.push('1101');
        break;
      case "E":
        hex1.push('1110');
        break;
      case "F":
        hex1.push('1111');
        break;
      case "0":
        hex1.push('0000');
        break;
      case "1":
        hex1.push('0001');
        break;
      case "2":
        hex1.push('0010');
        break;
      case "3":
        hex1.push('0011');
        break;
      case "4":
        hex1.push('0100');
        break;
      case "5":
        hex1.push('0101');
        break;
      case "6":
        hex1.push('0110');
        break;
      case "7":
        hex1.push('0111');
        break;
      case "8":
        hex1.push('1000');
        break;
      case "9":
        hex1.push('1001');
        break;
    }
  }
  console.log(hex1.join(""));
  return  hex1.join("");
}

export function twosComplement(n){
  let note;
  let invert  = [];
  let length = n.toString().length;
  let string = n.toString();
  let i;
  let carry;
  for(i = 0; i < length; i++){
    switch (string[i]) {
      case "0":
        invert.push('1');
        break;
      default:
        invert.push('0');
    }
  }

  for(i = length-1; i > 0; i--){
    carry = 1 + parseInt(invert[i]);
    if(carry === 2){
      invert[i] = '0';
    }
    else if(carry === 1){
      invert[i] = '1';
      break;
    }
  }
  console.log("Your number in Binary two's complement:");
  console.log(invert.join(""));
  return invert.join("");
}
