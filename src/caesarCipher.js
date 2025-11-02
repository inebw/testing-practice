export default function caesarCipher(s, shiftFactor) {
  function getCharCode(ch, sf) {
    if (ch > 64 && ch < 91) {
      if ((ch + sf) > 90) return (64 + (ch + sf - 90))
        return ch + sf;
    }
    if (ch > 96 && ch < 123) {
        if ((ch + sf) > 122) return (96 + (ch + sf - 122))
        return ch + sf;
    }
    return ch;
  }
  let cipher = "";
  for (let i = 0; i < s.length; i += 1) {
    const charCode = getCharCode(s.charCodeAt(i), shiftFactor);
    cipher += String.fromCharCode(charCode);
  }

  return cipher;
}
