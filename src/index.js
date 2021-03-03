module.exports = function reverse (n) {
  let result = n.toString().split('').reverse().join('')
	if (result[result.length-1]=='-'){
		return +result.slice(0,result.length-1)
	} else{
		return +result
	}
}
