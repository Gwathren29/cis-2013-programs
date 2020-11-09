/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */
//creating loop at beginning of program to set up loop of game unless user chooses to quit
while (intQuit != 1)
{
var intMax, intMin, intRandom, intGuess, intCount, intQuit;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
intMin = parseInt(prompt("Choose the lower number in the range. It must be at least Zero."));
while (intMin < 0 || isNaN(intMin))
{
    intMin = parseInt(prompt("The number entered is invalid, please try again"));
}


/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
intMax = parseInt(prompt("Choose the higher number in the range. It must be at least 2 greater than the minimum."));
while (isNaN(intMax) || intMax < (intMin + 2))
{
    intMax = parseInt(prompt("The number entered is invalid, please try again"));
}

/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt(Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter
intCount = 1;

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/
intGuess = parseInt(prompt("Enter your guess. Make sure that it is between the minimum and maximum"));
while (isNaN(intGuess) || intGuess > intMax || intGuess < intMin)
{
    intGuess = parseInt(prompt("The number entered is invalid, please try again"));
}


/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
while (intGuess != intRandom)
{
    if (intGuess < intRandom)
    {
        intGuess = parseInt(prompt("Guess is too low, try again"));
        while (isNaN(intGuess) || intGuess > intMax || intGuess < intMin)
        {
            intGuess = parseInt(prompt("The number entered is invalid, please try again"));
        }
    }
    else
    {
        intGuess = parseInt(prompt("Guess is too high"));
        while (isNaN(intGuess) || intGuess > intMax || intGuess < intMin)
        {
            intGuess = parseInt(prompt("The number entered is invalid, please try again"));
        }
    }
    intCount++;
}
 
// provides final output upon successful guessing
/* Third line of code in the alert implements point system based upon range of possible values where 1 guess would be equal to maximum number
of possibilitiess, ex: minimum of 0, maximum of 5, 6 possible points, one guess would give 6 points, 3 guesses would give 4 points */
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!" + "\n" +
        "You received a total of " + (intMax - intMin + 2 - intCount) + " points this round!");
//accepts input to determine if loop will repeat or not
intQuit = parseInt(prompt("If you would like to quit, enter 1"));
}
//final output upon quitting the loop
alert("Thank you for playing!");