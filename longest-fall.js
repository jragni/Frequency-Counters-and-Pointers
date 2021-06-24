// add whatever parameters you deem necessary
function longestFall(array) {
	// Edge cases
	if(array.length === 1 ){ 
		return 1
	}else if(array.length === 0) {
		return 0;
	}
	

	let longestConsecutiveFall = 1;
	let idx = 0;
	let currentCounter = 1;

	while(idx < array.length ){

		if(currentCounter > longestConsecutiveFall){
			longestConsecutiveFall = currentCounter;
		}
		array[idx] > array[idx + 1] ? currentCounter++ : currentCounter = 1;

		idx++;
	}
	return longestConsecutiveFall;
}
