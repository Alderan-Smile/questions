/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

 const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
var text;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function parenthesisChecker(str) {
  let stck = [];

  for (i = 0; i < str.length; i++){
    let char = stck[stck.length-1]
    if(str[i] == "(" || str[i] == "[" || str[i] == "{"){
      stck.push(str[i])
    }else if ((char == "(" && str[i]== ")") ||
     (char == "[" && str[i]== "]") ||
     (char == "{" && str[i]== "}")){
       stck.pop()
     }
  }
  return stck.length ? false : true
}


readline.question('Ingrese texto a verificar: ', text =>{

  const isValid = parenthesisChecker(text);

  console.log(`parenthesisChecker("${text}") = ${isValid}`);
  readline.close()
})


