const enteredPinNumber = (1234)
const checkPIN = (enteredPinNumber) => { 

    if (enteredPinNumber == 1234) { 
    
    console.log("PIN entered correctly"); 
    enteredPinNumber = false; 
   
    } else {
    
        console.log("PIN entered incorrectly");
      enteredPinNumber = true };
     

}

    checkPIN(1234); 

    const availableBalance = (7000)
    
    const displayBalance = () => {
        console.log('Your available balance is £' + availableBalance + '. What would you like to withdraw?'); 
    }

displayBalance()

const withdrawCash = () => { 
    
    if (withdrawCash < availableBalance) {
        console.log('Cash withdrawn, please take your money');
    } else { 
        console.log('Funds not available');
    }
}
withdrawCash(900)