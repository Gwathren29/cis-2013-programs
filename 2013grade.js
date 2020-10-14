//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;
//getting values for Hw,Mid,Fin, ensuring in range, and calculating total Points
floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));
while (floatHwPts < 0 || floatHwPts > 30) {
    floatHwPts = parseFloat(prompt("Invalid Input for Homework Points, Enter Value Between 0-30"));
};
floatMidPts = parseFloat(prompt("Please enter Midterm pts (0-35)"));
while (floatMidPts < 0 || floatMidPts > 35) {
    floatMidPts = parseFloat(prompt("Invalid Input for Midterm Points, Enter Value Between 0-35"));
};
floatFinPts = parseFloat(prompt("Please enter Final pts (0-35)"));
while (floatFinPts < 0 || floatFinPts > 35) {
    floatFinPts = parseFloat(prompt("Invalid Input for Final Points, Enter Value Between 0-35"));
};
floatTotalPts = parseFloat(floatFinPts + floatMidPts + floatHwPts);
//designate type of grade receiving
intGradeOption = parseInt(prompt("Enter 1 for Pass/Fail, 2 for Letter Grade"));
//calculate grade whether pass/fail or Letter grade
if (intGradeOption===1){
    if(floatTotalPts >= 80){
    alert("You Passed");
    } else {alert("You Failed");}
} else if(floatTotalPts <= 100 && floatTotalPts >= 90) {
    stringFinalGrade = ("A");
} else if(floatTotalPts < 90 && floatTotalPts >= 80) {
    stringFinalGrade = ("B");
} else if(floatTotalPts < 80 && floatTotalPts >= 70) {
    stringFinalGrade = ("C");
} else if(floatTotalPts < 70 && floatTotalPts >= 60) {
    stringFinalGrade = ("D");
} else if(floatTotalPts < 60) {
    stringFinalGrade = ("F");
}
//Alert given letter option
alert("Your final grade is: " +stringFinalGrade);