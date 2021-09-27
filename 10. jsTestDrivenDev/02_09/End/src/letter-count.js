// 'cat' -> { c: 1, a: 1, t: 1 }
// 'better' -> { b: 1, e: 2, t: 2, r: 1 }

export const getLetterCount = string => {
    const letters = string.split('');
    let letterCount = {};

    letters.forEach(letter => {
        if (!letterCount[letter]) {
            letterCount[letter] = 1;
        } else {
            letterCount[letter] += 1;
        }
    });

    return letterCount;
};