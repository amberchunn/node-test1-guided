const numCruncher = require("./calculator")

describe("numCruncher unit tests", () => {
	it("adds", () => {
		expect(numCruncher.sum(2, 2)).toBe(4)
		expect(numCruncher.sum(3, 2)).toBe(5)
		// try it with a zero
		expect(numCruncher.sum(1, 0)).toBe(1)
		// try it with a negative number
		expect(numCruncher.sum(-1, 1)).toBe(0)
		// try it with a missing parameter
		expect(numCruncher.sum(1)).toBe(1)
		// try it with no parameters
		expect(numCruncher.sum()).toBe(0)
		// refactor to support more parameters
		expect(numCruncher.sum(2, 2, 2)).toBe(6)
		expect(numCruncher.sum(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45)
	})

	it("subtracts", () => {
		expect(numCruncher.difference(2, 2)).toBe(0)
		expect(numCruncher.difference(3, 2)).toBe(1)
		expect(numCruncher.difference(1, 0)).toBe(1)
		expect(numCruncher.difference(-1, 1)).toBe(-2)
		expect(numCruncher.difference(-1, -2)).toBe(1)
		expect(numCruncher.difference(1)).toBe(1)
		expect(numCruncher.difference()).toBe(0)
		// refactor to support more parameters
		expect(numCruncher.difference(2, 2, 2)).toBe(-2)
		expect(numCruncher.difference(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(-43)
	})

	it("multiplies", () => {
		expect(numCruncher.product(2, 2)).toBe(4)
		expect(numCruncher.product(3, 2)).toBe(6)
		expect(numCruncher.product(1, 0)).toBe(0)
		expect(numCruncher.product(-1, 1)).toBe(-1)
		expect(numCruncher.product(1)).toBe(1)
		expect(numCruncher.product()).toBe(1)
		// refactor to support more parameters
		expect(numCruncher.product(2, 2, 2)).toBe(8)
		expect(numCruncher.product(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(362880)
	})

	it("divides", () => {
		expect(numCruncher.quotient(2, 2)).toBe(1)
		expect(numCruncher.quotient(3, 2)).toBe(1.5)
		expect(() => numCruncher.quotient(1, 0)).toThrow()
		expect(numCruncher.quotient(-1, 1)).toBe(-1)
		expect(numCruncher.quotient(1)).toBe(1)
		expect(numCruncher.quotient()).toBe(0)
		// refactor to support more parameters
		expect(numCruncher.quotient(2, 2, 2)).toBe(0.5)
		expect(numCruncher.quotient(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(0.0000027557319223985893)
		expect(numCruncher.quotient(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBeLessThan(1)
	})

	it("parses", () => {
		expect(numCruncher.parse({
			sum: [1, 2, 3],
			difference: [3, 2, 1],
			product: [1, 2, 3],
			quotient: [2, 2, 2],
		// use `.toEqual` rather than `.toBe` for non-primitive data types
		})).toEqual({
			sum: 6,
			difference: 0,
			product: 6,
			quotient: 0.5,
		})
	})
})
