"use strict"
/**
 * 
 * @param {Array} keys  -- keys for the object
 * @param {Array} values  -- values for the object
 * @returns {Object} -- object made from keys and values
 */
function twoArrayObject(keys, values) {

	let keyValueObject = {};

	keys.forEach( (key, idx) => {
		
		let value = values[idx] !== undefined ? values[idx] : null; 

		keyValueObject[key] = value;
	})

	return keyValueObject;
}

