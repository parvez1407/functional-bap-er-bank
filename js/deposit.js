// DRY- Principle- Do not repeat yourself


document.getElementById('btn-deposit').addEventListener('click', function () {
    // 1. get the element by id
    // 2. get the value from the element
    // 3. convert string value to a number
    const newDepositAmount = getInputFieldValueById('deposit-field');
    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid input value');
        return;
    }

    /* 
    1. get previous deposit total by id
    */
    const previousDepositTotal = getTextElementValueById('deposit-total');
    // calculate new deposit total
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    // Set deposit Total value
    setTextElementValueById('deposit-total', newDepositTotal);


    /* 
    1. get previous Balance Total by id
    */
    const previousBalanceTotal = getTextElementValueById('balance-total');
    // calculate new Balance total
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set new current balance total
    setTextElementValueById('balance-total', newBalanceTotal);



})