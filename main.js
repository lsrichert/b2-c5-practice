// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// For example...

// // Only show even numbers
// const numbers = [1,2,3,4,5,6,7]

// for (let i = 0; i < numbers.length; i++) {
//     const currentNumber = numbers[i]

//     // Take the current number, divide by 2, and check if the remainder is 0
//     if (currentNumber % 2 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }



for (let i = 1; i <= 100; i++) { 
    if (i % 5 === 0 && i % 7 === 0){
        console.log("ChickenMonkey");
    }
    if (i % 5 ===0) {
    console.log("Chicken", i);
}
      if (i % 7 ===0) {
        console.log("Monkey", i);
  } 
    
    else {
        console.log(i);
    }
    
    }

    // this is practice bandName. I added a band.

let bandNumber = 0

let takeNumber = function (i) {
    bandNumber ++
    return (bandNumber + ". " + i);
    
console.log(bandNumber);
console.log(takeNumber);
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const star = takeNumber("Star Ship")
console.log(star)