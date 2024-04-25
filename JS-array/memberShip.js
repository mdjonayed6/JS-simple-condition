// Title: Checking Array Membership with ‘includes’
// Create an array of books containing different book.
const books = ["jupitar", "science", "bangla", "javascript", "Chemistry plus"];
// Use the includes method to check if the array contains a javascript book.
console.log(books.includes('javascript'));
// Print a message to the console indicating whether the element is present in the array or not.
console.log(books.includes('biology'));

// Extra
if (books.includes('jupitar')) {
    console.log("Logged in successfully");
}
else {
    console.log("Your data is not valid")
}