// take all the parameters passed to the function, no matter how many,
// and make them avaiable as an array in `values`
function sum(...values) {
	return values.reduce((a, b) => a + b, 0)
}

function difference(...values) {
	// remove the first item before reducing,
	// since the initial value is the first item
	return values.slice(1).reduce((a, b) => a - b, values[0] || 0)
}

function product(...values) {
	// using an initial value of 1 is better than 0 for multiplication
	return values.reduce((a, b) => a * b, 1)
}

function quotient(...values) {
	// none of the parameters can be 0, other than the first one
	if (values.slice(1).indexOf(0) > -1) {
		throw new Error("Cannot divide by zero")
	}
	return values.slice(1).reduce((a, b) => a / b, values[0] || 0)
}

function parse(data) {
	// keep the original object immutable by creating a new object
	const result = {}

	// check that values not only exist, but are also arrays
	if (Array.isArray(data.sum)) {
		// spread before sending since data.sum is an array,
		// and the `sum` function expects a list of parameters
		result.sum = sum(...data.sum)
	}
	if (Array.isArray(data.difference)) {
		result.difference = difference(...data.difference)
	}
	if (Array.isArray(data.product)) {
		result.product = product(...data.product)
	}
	if (Array.isArray(data.quotient)) {
		result.quotient = quotient(...data.quotient)
	}

	return result
}

module.exports = {
	sum,
	difference,
	product,
	quotient,
	parse,
}
