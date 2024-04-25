/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const weight = 140;
const height = 2;
console.log("Your weight is ", weight);
console.log(`Your height is  ${height}m`);

const hSquare = height ** 2;
const bmi = weight / hSquare;

if (bmi < 18.5) {
    console.log(`Your BMI is: ${bmi} \nyou are underweight.`);
}
else if (bmi <=24.9) {
    console.log(`Your BMI is: ${bmi} \nDon't worry, You are normal`);
}
else if ((bmi>=25 && (bmi <= 29.9))) {
    console.log(`Your BMI is: ${bmi} \nOhh, you are overweight.`);
}
else{
    console.log(`Your BMI is: ${bmi} \nUnfortunately, you are obese. Control your health condition`);
}