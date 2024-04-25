/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myMarks = 79;
const friendsMark = -34;
if (myMarks > 80) {
    if (friendsMark > 80) {
        console.log("Let's have a launch together");
    }
    else if (friendsMark < 40) {
        console.log("Block from facebook");
    }
    else if ((friendsMark < 60) || (friendsMark >= 40)) {
        console.log(" unseen your message"); 
    }
    else if ((friendsMark < 80) || (friendsMark >= 60)) {
        console.log("Better luck next time ");
    }
}
else{
    console.log("I got a bad result. I am finish");
}