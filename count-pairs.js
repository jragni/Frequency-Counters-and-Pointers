"use strict"

function countPairs(array, target) {

	let count = 0;
	let potentialPairs = new Set(array);
	// creating a set to get rid of 
	for(let value of potentialPairs){
		
		potentialPairs.delete(value);
		if(potentialPairs.has(target - value)){
			count++;
		}
	}
	return count;
}
