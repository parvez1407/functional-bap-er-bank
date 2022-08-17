/* 
    1. add withdraw button event handler
    2. get withdraw amount by using getInputFieldValueById function
    3. get previous withdraw amount by using getTextElementValueById function
    4. calculate new withdraw total
    4-5: set withdraw total by using setTextElementValueById function
    5. get previous balance total by using getTextElementValueById function
    6. calculate new balance total 
    6-5: set balance total by using setTextElementValueById function
*/

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // 1. get the element by id
    // 2. get the value from the element
    // 3. convert string value to a number
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid input value');
        return;
    }


    /* 
    1. get previous Balance Total by id
    */
    const previousBalanceTotal = getTextElementValueById('balance-total');
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('you have no sufficient balance in your account');
        return;
    }

    /* 
    1. get previous withdraw total by id
    */
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');


    // calculate new deposit total
    const correntWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // Set deposit Total value
    setTextElementValueById('withdraw-total', correntWithdrawTotal);

    // calculate the current new Balance total
    const correntBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // set new current balance total
    setTextElementValueById('balance-total', correntBalanceTotal);


})