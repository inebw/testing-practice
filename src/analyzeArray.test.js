import analyzeArray from "./analyzeArray";

test('average test', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4)
})

test('min test', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1)
})

test('max test', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8)
})

test('length test', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6)
})