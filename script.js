
const totalBillDiv = document.getElementById('billTotalInput');
const tipDiv = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const waiterTipDiv = document.getElementById('waiterTip');
const perPersonTotalDiv = document.getElementById('perPersonTotal');
const totalbillDiv = document.getElementById('totalbill');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
    let billTotal = Number(totalBillDiv.value)
    // console.log(billTotal)

    let tipAmount = tipDiv.value / 100
    // console.log(tipAmount)

    let totalTipAmount = billTotal * tipAmount
    // console.log(totalTipAmount)
    waiterTipDiv.innerText = `$${Math.ceil(totalTipAmount)}`

    let totalBillAmount = billTotal + totalTipAmount
    // console.log(`TOTAL VILL ${totalBillAmount}`)
    totalbillDiv.innerText = `$${Math.ceil(totalBillAmount)}`

    let perPersonCost = totalBillAmount / numberOfPeople
    // console.log(`PER PERSON${perPersonCost}`)

    perPersonTotalDiv.innerText = `${Math.ceil(perPersonCost)}`

}



const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}

const decreasePeople = () => {

    if (numberOfPeople <= 1) {
        alert('Cant set person to negative number');
        return
    }

    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}

const clearInput = () => {
    totalBillDiv.value = "";
    tipDiv.value = "";
    numberOfPeopleDiv.innerText = `${Number(1)}`;
    numberOfPeople = 1
    waiterTipDiv.innerText = `₹0.00`;
    perPersonTotalDiv.innerText =  `₹0.00`;;
    totalbillDiv.innerText =  `₹0.00`;;
    // calculateBill();
}