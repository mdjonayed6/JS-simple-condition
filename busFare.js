/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 33;
const ticketFee = 800;

if (age < 10) {
    console.log("You don't need to pay");
}

else if ((age > 11) && (age <= 28)) {
        // 50% discount 
        const discount = ticketFee * 50/100;
        const payAmount = ticketFee - discount;
        console.log("Student fee :", payAmount);
    }

else if (age >= 60) {
        // 15% discount  
        const discount = ticketFee * 15/100;
        const payAmountAdult = ticketFee - discount;
        console.log("Adult fee ", payAmountAdult);
    }
    else{
        console.log("Ticket Fee :", ticketFee);
    }