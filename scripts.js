// // Solve the following problems, you will need to determine which for loop to use, or if one is needed at all:

// 1. Write a function called sum which takes a whole number n as a parameter which will add up all the whole numbers between 1 and the value of n.  The sum should be returned by the function.
const sum = (n) => {
    let sum = 0
    for(let i = 1; i <= n; i++) {
      sum += i
    }
    return sum
}
console.log(sum(7));

  
// 2. Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
const countSyllable =(str) => {
    return str.length /2
}
console.log(countSyllable("gugugagagugugaga")); // 8

  
// 3. Write a function called addTo that accepts a number as a parameter and adds all whole numbers smaller or equal than the parameter. The result is to be returned.
const addTo = number => {
    let num = 0
    for(let i = 1; i <= number; i++) {
      num += i
    }
    return num
}
  console.log(addTo(10));


  
//4. Write a function that takes a string input and console logs each letter.
let eachLetterString = (str) => {
    for (let char of str){
        console.log(char);
    }
}
eachLetterString("Wakanda Forever!"); 

//5. Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
let caseFinder = (str) => {

    if (str === str.toUpperCase()){
        return(`UPPER!`);
    }

    else if (str === str.toLowerCase()){
        return(`lower!`);
    }
    else{
        return(`mixed!`);
    }
}
console.log (caseFinder ("WaKanda ForEver!")); // mixed
console.log (caseFinder ("WAKANDA FOREVER!")); // upper
console.log (caseFinder ("wakanda forever!")); // lower
  

// 6. Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.
// const guessMyNumber = (number) =>{
    
//     for(let i = 0; i >=0; i++){
//     num = prompt(`My secret number is between 1-25`)
//     if( number>=25){
//         alert(`Yo buddy! that is hella high, try again!`)
//     }
//     else if( number < 16) {
//         alert(`Nah I will not go that low, try again`)
//     }
//     else if( number==16){
//         alert(`Finally!! Took you long enough`)
//         return
//     }
//     else{
//         alert(`please enter a number`)
//     }
// }
// }
// console.log(guessMyNumber(16));

//7. Write a JavaScript for loop that will iterate from 0 to 25. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
//Your results should look like this:
// "0 is even"
// "1 is odd"
// "2 is even"
for (i=0; i<=25; i++){
    if(i%2==0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
}

// 8. You have a shelf that can only hold so many books. For each iteration of the loop, we will add one book onto the shelf. Once the shelf has 80 books, you can no longer add anymore. Write a script that after every iteration, it will tell you how many remaining books you can add into the shelf. Console log something like, "There is room for only ## of books"

const availSpace = () => {
    
    for(let i=80; i>=0; i--){
        if(i<=80 && i>0){
            console.log(`There is room for only ${i} books!`)
        }
        else if(i===0){
            console.log(`Space maxed out, time to box the rest!`)
        }
    }
}
availSpace()

// 9. Print out a grid of asterisks. Ask the user for the height (rows) and width (columns).
// const asterisksGrid = () => {
//     const row = Number(prompt('State the height?'))
//     const col = Number(prompt('State the width?'))
//     let grid = ''
//     for(let i = 1; i <= row; i++) {
//       for(let j = 1; j <= col; j++) {
//         grid += '*'
//       }
//       grid += `\n`
//     }
//     return grid
//   }
  
//   console.log(asterisksGrid());


// 10. Write a function that takes a string input, transforms the odd characters to uppercase, and console logs the result of the entire string.
// Example input: "hello" Output: "hElLo"
const oddUpperCase = str => {
    let newStr = ''
    for(let i = 0; i < str.length; i++) {
      if(i%2 === 1) {
        newStr += str[i].toUpperCase()
      } else {
        newStr += str[i]
      }
    }
    return newStr
  }
 console.log(oddUpperCase('wakanda'));
  
// 11. Write a function that accept two integers and displays the larger number.

const displayLarger = (a,b) =>{
    if(a>b){
        console.log(a)
    }
    else if(b>a){
        console.log(b)
    }
}
displayLarger(19,79);


//12. Write a function that takes in 3 numbers and sorts them from lowest to highest. Display an alert box to show the result.
const sortNumbers = (a, b, c) => {
    let min = Math.min(a,b,c);
    let max = Math.max(a,b,c);
    let answer = "";
    answer += `${min}, `;
    if (a != min && a!= max){
        answer += `${a}, `;
    }
    else if (b != min && b!= max){
        answer += `${b}, `;
    }
    else {
        answer += `${c}, `;
    }
    answer += max;
    alert(`Sorted list is: ${answer}`);
}
sortNumbers(3,16,11);
sortNumbers(34, 56, 19);


// 13. Write a function that takes in a string and removes all vowels from it (a, e, i, o, u), and returns the new string. If the string is empty, break from the loop.
const removeVowel = (str) => {
    const vowels = 'aeiou'
    for(let i = 0; i < str.length; i++) {
      if(vowels.includes(str[i])){
        str = str.replace(str[i], '')
      }
    }
    return str
  }
  
  console.log(removeVowel('Wakanda Forever!'));


// 12



































