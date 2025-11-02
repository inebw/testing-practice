import reverseString from "./reverseString";

test("simple string", () => {
    expect(reverseString("simple string")).toBe("gnirts elpmis")
})

test("string with spaces", () => {
    expect(reverseString("mocha del rio")).toBe("oir led ahcom")
})

test("string with characters", () => {
    expect(reverseString("mocha del @rio")).toBe("oir@ led ahcom")
})

test("palindrome", () => {
    expect(reverseString("tattarrattat")).toBe("tattarrattat")
})

