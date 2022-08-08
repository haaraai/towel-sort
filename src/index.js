
module.exports = function towelSort (matrix) {
	let sorted = [];
	for(key in matrix){
		if (key % 2 === 0) sorted.push(...matrix[key]);
		else sorted.push(...matrix[key].reverse());
	}
  return sorted;
};

