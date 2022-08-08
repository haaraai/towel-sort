
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let sortedArr = [];
	for(key in matrix) {
		if (key % 2 == 0) {
      sortedArr.push(...matrix[key])
    }
		else {
      sortedArr.push(...matrix[key].reverse());
	}
  return sortedArr;
}
};