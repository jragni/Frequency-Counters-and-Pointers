"use strict"
/**
 * isSubsequenct takes in two strings and checks whether the characters in the first string form a subsequence of characters
 * in the second string.
 * @param {String} subString  --- subString the function verifies exists within string
 * @param {String} string  --- string the function checks to see if subString exists 
 * @returns {Boolean} 
 */
function isSubsequence(subString, string) {

	// implement multiple pointers

	let subStringIdx = 0;
	let stringIdx = 0;
	while(stringIdx < string.length){

		if(string[stringIdx] === subString[subStringIdx]){
			subStringIdx++;
		}

		stringIdx++;

		if(subStringIdx === subString.length){
			return true;
		}
	}

	return false;
}
