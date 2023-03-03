/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

// step1 grab all needed div input
let billTotalInput = document.getElementById('billTotalInput');
let tipInput = document.getElementById('tipInput');
let peopleCount = document.getElementById('numberOfPeople');
let totalPerPerson = document.getElementById('perPersonTotal');
let waiterTipTotal = document.getElementById('waiterTip');

// Get number of people from number of people div
let numersOfPeople = Number(peopleCount.innerText)


// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billTotalInput.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercentage = tipInput.value / 100

  // get the total tip amount
  const totalTipAmount = bill * tipPercentage
  waiterTipTotal.innerText = Math.ceil(totalTipAmount)

  // calculate the total (tip amount + bill)
  const totalBillAmount = bill + totalTipAmount

  // calculate the per person total (total divided by number of people)
  const perPersonCost = totalBillAmount / numersOfPeople

  // update the perPersonTotal on DOM & show it to user
  totalPerPerson.innerText = Math.ceil(perPersonCost)
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numersOfPeople += 1

  // update the DOM with the new number of people
  peopleCount.innerText = numersOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  if (numersOfPeople <= 1) {
    alert(`Cannot set Person less than 1`)
    return
  }
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)


  // decrement the amount of people
  numersOfPeople -= 1
  // update the DOM with the new number of people
  peopleCount.innerText = numersOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}



