let ammounts;
let savedAmmounts = [];



/**
 * This function looks for all span elements with class of "ingedients-amount" and saves the html-content.
 * The function converts explicit to string and replaces "," to "." and then to float.
 * The function pushes all floats in an array
 */
function saveOrigin() {
    ammounts = document.querySelectorAll('.ingredients-amount');
    ammounts.forEach(amount => {
        amount = amount.innerHTML.toString();
        amount = +amount.replace(",",".")
        savedAmmounts.push(amount)
    });
}

let inputField = document.getElementById('amount');
inputField.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        calculate();
    }
})

/**
 * The function gets the value of an inputfield and validates that this value is between 1 and 6. If needed the value will be corrected.
 * The function multiplies the value with all saved ammounts and convert the summary to string and replaces "." to ",".
 * The function renders the innerHTML of the original ammount with new values.
 */
function calculate() {

    let multi = inputField.value;
    
    if (multi < 1) {
        inputField.value = 1;
        calculate();
    } else if (multi > +inputField.max) {
        inputField.value = inputField.max;
        calculate();
    } else {
        ammounts.forEach((element, index) => {
            let htmlString = (savedAmmounts[index] * multi).toString()
            element.innerHTML = htmlString.replace(".",",");
        });
    }

}
