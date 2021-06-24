"use strict"

/**
 * SameFrequency checks if the counts of each digit for both numbers passed have the same counts
 * 
 * @param {Integer} num1
 * @param {Integer} num2
 * @returns {Boolean}  returns whether both numbers have the same counts for each digit in both numbers
 */


function sameFrequency(num1, num2) {
	// Edge Case -- check to see if both numbers have the same length 
	if (num1.toString().length !== num2.toString().length ) return false;
	
	let num1DigitCounts = digitFrequencyCounter(num1);
	let num2DigitCounts = digitFrequencyCounter(num2);

	for(let digit in num1DigitCounts){

		if(num1DigitCounts[digit] !== num2DigitCounts[digit]){
			return false;
		}
	}

	
	return true;
}


/**
 * 
 * @param {Integer} number --  
 * @returns {Object} returns object containing the digit as keys and the counts as the value
 */
function digitFrequencyCounter(number){
	
	let numberString = number.toString();

	let digitCounts = {};
	
	for(let digit of numberString){
		digitCounts[digit] ? digitCounts[digit]++ : digitCounts[digit] = 1;
	}
	return digitCounts;
}
