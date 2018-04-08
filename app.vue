<template>
  <div>
    <p>Gimmie some input and Ill write it back out to you in a list!</p>
    <input v-model="rawInput" v-on:keyup.enter="convertInput()">
    <input type="checkbox" id="checkbox" v-model="checked">Negative!</input>
    <br>
    <p>Input Data Type:</p>
    <label for="checked">{{checked}}</label>
    <input type="radio" id="decimal" value="Decimal" v-model="inputType">
    <label for="decimal">Decimal</label>
    <input type="radio" id="hexadecimal" value="Hexadecimal" v-model="inputType">
    <label for="hexadecimal">Hexadecimal</label>
    <input type="radio" id="binary" value="Binary" v-model="inputType">
    <label for="binary">Binary</label>
    <table style="width:100%">
     <tr>
       <th>dataType</th>
       <th>Output</th>

     </tr>
     <tr>
       <td>Decimal</td>
       <td>{{decimalOut}}</td>

     </tr>
     <tr>
       <td>Binary</td>
       <td>{{binaryOut}}</td>

     </tr>
     <tr>
       <td>Hexadecimal</td>
       <td>{{hexadecimalOut}}</td>
     </tr>
    </table>
  </div>
</template>

<script>
  import {hexToDec, toBinary, toHex} from "./converters.js"
  export default {
    data() {
      return  {
        checked: "",
        inputType: "",
        rawInput: '',
        decimalOut: '',
        hexadecimalOut: '',
        binaryOut:  '',
        decimalTemp:  '',
        processed: 0
      }
    },
    methods:  {
      convertInput() {
        const USERINPUT = this.rawInput;
        if(this.checked){

        } else {
          console.log("Hex ticked");
          if(this.inputType === hexadecimal){
            this.processed =  hexToDec(USERINPUT);
          }
          this.decimalOut = this.processed;
          this.binaryOut = toBinary(this.processed);
          this.hexadecimalOut = toHex(this.processed);
        }
      }
    }
  }
</script>
