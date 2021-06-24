"use strict"

function countPairs(array, target) {

	let count = 0;
	let potentialPairs = new Set(array);
	
	for(let value of potentialPairs){
		
		potentialPairs.delete(value);
		if(potentialPairs.has(target - value)){
			count++;
		}
	}
	return count;
}
