"use strict"

/**
 * 
 * @param {Integer} array -- Sorted array of integers 
 * @param {Integer} target -- target average that the function is trying to search the array of integers for
 * @returns {boolean}  -- boolean of whether the pair that averages the target exists
 */

function averagePair(array, target) {
	let leftPtr = 0;
	let rightPtr = array.length - 1;

	// Implement Multiple Pointers because the input array is sorted
	while (leftPtr < rightPtr){
		let currentAverage = calculatePairAverage(array[leftPtr], array[rightPtr]);

		if (currentAverage === target){
			return true;
		}else if (currentAverage < target ){
			leftPtr++;
		}else{
			rightPtr --;
		}
	}
	return false;

}

function calculatePairAverage (num1, num2){
	return (num1 + num2) / 2;
}