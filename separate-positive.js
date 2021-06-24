"use strict"

/**
 * 
 * @param {Array} array -- unsorted array of integers 
 * @returns sorted array of integers separated with positive at the beggining and negative at the end
 */

function separatePositive(array) {

	let leftPtr = 0;
	let rightPtr = array.length - 1;

	// Use multiple pointers pattern to swap
	while(leftPtr < rightPtr){
		// if left element is negative and right element is positive, swap and increment left/decrement right
		if(array[leftPtr] < 0 && array[rightPtr] > 0){
			[ array[leftPtr], array[rightPtr] ] = [ array[rightPtr], array[leftPtr] ];
			leftPtr++;
			rightPtr--;
		}else if (array[leftPtr] > 0){
			leftPtr++;
		}else{
			rightPtr--; 
		}
	}

	return array;
}
