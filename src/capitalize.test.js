import capitalize from "./capitalize";

test('one word first letter check', () => {
    expect(capitalize("november")).toBe("November");
})

test('two words', () => {
    expect(capitalize("hello, world!")).toBe("Hello, world!");
})

test('multiple words', () => {
    expect(capitalize("whatever you do, just don't come here.")).toBe("Whatever you do, just don't come here.");
})

test('Multiple inconsistent capital letters', () => {
    expect(capitalize("Hi, wHat are You coDing?")).toBe("Hi, what are you coding?");
})