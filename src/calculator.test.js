import calculator from "./calculator";

test('add two positive numbers', () => {
    expect(calculator.add(2, 3)).toBe(5)
})

test('add two negative numbers', () => {
    expect(calculator.add(-3, -5)).toBe(-8)
})

test('add two decimal numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3)
})

test('subtract two positive numbers', () => {
    expect(calculator.sub(5, 3)).toBe(2)
})

test('subtract two negative numbers', () => {
    expect(calculator.sub(-3, -5)).toBe(2)
})

test('subtract two decimal numbers', () => {
    expect(calculator.sub(0.4, 0.1)).toBeCloseTo(0.3)
})

test('multiply two positive numbers', () => {
    expect(calculator.mul(9, 5)).toBe(45);
})

test('multiply two negative numbers', () => {
    expect(calculator.mul(-3, -5)).toBe(15);
})

test('multiply with decimal numbers', () => {
    expect(calculator.mul(3, 0.1)).toBeCloseTo(0.3);
})

test('divide two positive numbers', () => {
    expect(calculator.div(15, 2)).toBe(7.5)
})

test('divide two negative numbers', () => {
    expect(calculator.div(-10, -2)).toBe(5)
})

test('divide with decimal numbers', () => {
    expect(calculator.div(0.9, 3)).toBe(0.3)
})