var $ = function (id) 
{
    return document.getElementById(id);
};
var calculate_click = function () 
{
var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;
//getting values for Hw,Mid,Fin, ensuring in range, and calculating total Points
floatHwPts = parseFloat($("hw_pts").value);
while (floatHwPts < 0 || floatHwPts > 30) {
    floatHwPts = alert("Invalid Input for Homework Points, Enter Value Between 0-30");
};
floatMidPts = parseFloat($("mid_pts").value);
while (floatMidPts < 0 || floatMidPts > 35) {
    floatMidPts = alert("Invalid Input for Midterm Points, Enter Value Between 0-35");
};
floatFinPts = parseFloat($("fin_pts").value);
while (floatFinPts < 0 || floatFinPts > 35) {
    floatFinPts = alert("Invalid Input for Final Points, Enter Value Between 0-35");
};
floatTotalPts = parseFloat(floatFinPts + floatMidPts + floatHwPts);
//designate type of grade receiving
intGradeOption = parseInt($("grade_option").value);
//calculate grade whether pass/fail or Letter grade
if (intGradeOption===1){
    if(floatTotalPts >= 80){
    stringFinalGrade = "You Passed";
    } else {stringFinalGrade = "You Failed";}
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
$("final_grade").value = stringFinalGrade;
}
window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};