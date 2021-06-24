"use strict"

function canConstructWord(word, letters) {
	
	// Edge cases
	if(word.length > letters.length){
		return false;
	}

	let wordCharCounts = frequencyCounter(word);
	let letterCounts = frequencyCounter(letters);

	for(let key in wordCharCounts){
		if( letterCounts[key] < wordCharCounts[key]){
			return false;
		}
	}
	return true;
}


function frequencyCounter(string){
	let charCounts = {}
	
	for(let char of string){
		charCounts[char] ? charCounts[char]++ : charCounts[char] = 1;
	}

	return charCounts;
}