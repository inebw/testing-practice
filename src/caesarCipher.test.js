import caesarCipher from "./caesarCipher";

test('one letter', () => {
    expect(caesarCipher('a', 1)).toBe('b');
})

test('one word', () => {
    expect(caesarCipher('doom', 2)).toBe('fqqo')
})

test('capital case check', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('wrapping from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('wrapping from Z to A', () => {
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
})

test('punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})