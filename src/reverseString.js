export default function reverseString(s) {
    let reversed = ""
    for (let i = s.length - 1; i >= 0; i -= 1) reversed += s.slice(i, i+1);
    return reversed
}