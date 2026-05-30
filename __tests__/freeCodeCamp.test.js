const {
  factorialize,
  palindrome,
  findLongestWord,
  titleCase,
  confirmEnding,
  repeatStringNumTimes,
  truncateString,
  slasher,
  mutation,
  bouncer,
  destroyer,
  getIndexToIns,
  rot13,
  compare,
  diffArray,
} = require('../lib/freeCodeCamp');

describe('factorialize', () => {
  test('returns 1 for 0', () => {
    expect(factorialize(0)).toBe(1);
  });

  test('returns 1 for 1', () => {
    expect(factorialize(1)).toBe(1);
  });

  test('returns 120 for 5', () => {
    expect(factorialize(5)).toBe(120);
  });

  test('returns 3628800 for 10', () => {
    expect(factorialize(10)).toBe(3628800);
  });
});

describe('palindrome', () => {
  test('returns true for "racecar"', () => {
    expect(palindrome('racecar')).toBe(true);
  });

  test('returns false for "hello"', () => {
    expect(palindrome('hello')).toBe(false);
  });

  test('handles mixed case', () => {
    expect(palindrome('RaceCar')).toBe(true);
  });

  test('ignores non-alphanumeric characters', () => {
    expect(palindrome('A man, a plan, a canal. Panama')).toBe(true);
  });

  test('returns true for single character', () => {
    expect(palindrome('a')).toBe(true);
  });

  test('handles underscores', () => {
    expect(palindrome('_eye')).toBe(true);
  });
});

describe('findLongestWord', () => {
  test('finds longest word in a sentence', () => {
    expect(findLongestWord('The quick brown fox jumped over the lazy dog')).toBe(6);
  });

  test('handles single word', () => {
    expect(findLongestWord('hello')).toBe(5);
  });

  test('handles equal length words', () => {
    expect(findLongestWord('dog cat hat')).toBe(3);
  });
});

describe('titleCase', () => {
  test('title cases a simple sentence', () => {
    expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
  });

  test('handles all uppercase input', () => {
    expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).toBe('Here Is My Handle Here Is My Spout');
  });

  test('handles mixed case', () => {
    expect(titleCase('sHoRt AnD sToUt')).toBe('Short And Stout');
  });
});

describe('confirmEnding', () => {
  test('returns true when string ends with target', () => {
    expect(confirmEnding('Bastian', 'n')).toBe(true);
  });

  test('returns false when string does not end with target', () => {
    expect(confirmEnding('Bastian', 'a')).toBe(false);
  });

  test('works with multi-character targets', () => {
    expect(confirmEnding('Connor', 'or')).toBe(true);
  });
});

describe('repeatStringNumTimes', () => {
  test('repeats string given number of times', () => {
    expect(repeatStringNumTimes('abc', 3)).toBe('abcabcabc');
  });

  test('returns empty string for 0 repeats', () => {
    expect(repeatStringNumTimes('abc', 0)).toBe('');
  });

  test('returns empty string for negative repeats', () => {
    expect(repeatStringNumTimes('abc', -2)).toBe('');
  });

  test('handles single repeat', () => {
    expect(repeatStringNumTimes('abc', 1)).toBe('abc');
  });
});

describe('truncateString', () => {
  test('truncates long string', () => {
    expect(truncateString('A-tisket a-tasket A green and yellow basket', 11)).toBe('A-tisket...');
  });

  test('adds ellipsis when num <= 3 even if string is shorter', () => {
    expect(truncateString('A-', 3)).toBe('A-...');
  });

  test('handles num <= 3', () => {
    expect(truncateString('Absolutely Longer', 2)).toBe('Ab...');
  });

  test('returns original when length equals num', () => {
    const str = 'A-tisket a-tasket A green and yellow basket';
    expect(truncateString(str, str.length)).toBe(str);
  });
});

describe('slasher', () => {
  test('removes first n elements', () => {
    expect(slasher([1, 2, 3], 2)).toEqual([3]);
  });

  test('removes no elements when howMany is 0', () => {
    expect(slasher([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test('returns empty array when removing all', () => {
    expect(slasher([1, 2, 3], 3)).toEqual([]);
  });
});

describe('mutation', () => {
  test('returns true when all letters are present', () => {
    expect(mutation(['hello', 'Hello'])).toBe(true);
  });

  test('returns false when letters are missing', () => {
    expect(mutation(['hello', 'hey'])).toBe(false);
  });

  test('is case insensitive', () => {
    expect(mutation(['Alien', 'line'])).toBe(true);
  });

  test('handles single character match', () => {
    expect(mutation(['floor', 'for'])).toBe(true);
  });
});

describe('bouncer', () => {
  test('removes falsy values', () => {
    expect(bouncer([7, 'ate', '', false, 9])).toEqual([7, 'ate', 9]);
  });

  test('removes all falsy types', () => {
    expect(bouncer([false, null, 0, NaN, undefined, ''])).toEqual([]);
  });

  test('keeps truthy values', () => {
    expect(bouncer([1, null, NaN, 2, undefined])).toEqual([1, 2]);
  });
});

describe('destroyer', () => {
  test('removes specified values from array', () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
  });

  test('removes single value', () => {
    expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2)).toEqual([1, 3, 5, 1, 3]);
  });
});

describe('getIndexToIns', () => {
  test('returns correct index for middle value', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
  });

  test('returns 0 for smallest value', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 5)).toBe(0);
  });

  test('returns correct index for unsorted array', () => {
    expect(getIndexToIns([40, 60], 50)).toBe(1);
  });

  test('returns length for largest value', () => {
    expect(getIndexToIns([10, 20, 30], 40)).toBe(3);
  });
});

describe('rot13', () => {
  test('decodes ROT13 string', () => {
    expect(rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
  });

  test('preserves non-alphabetic characters', () => {
    expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
  });

  test('handles wrapping around alphabet', () => {
    expect(rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.')).toBe(
      'THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.'
    );
  });
});

describe('compare (rock-paper-scissors)', () => {
  test('returns tie for same choices', () => {
    expect(compare('rock', 'rock')).toBe('The result is a tie!');
  });

  test('rock beats scissors', () => {
    expect(compare('rock', 'scissors')).toBe('rock wins');
  });

  test('paper beats rock', () => {
    expect(compare('rock', 'paper')).toBe('paper wins');
    expect(compare('paper', 'rock')).toBe('paper wins');
  });

  test('scissors beats paper', () => {
    expect(compare('paper', 'scissors')).toBe('scissors wins');
  });
});

describe('diffArray', () => {
  test('finds elements not in both arrays', () => {
    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
  });

  test('finds elements missing from second array', () => {
    expect(diffArray([1, 2, 3], [1, 2])).toEqual([3]);
  });

  test('returns empty for identical arrays', () => {
    expect(diffArray([1, 2, 3], [1, 2, 3])).toEqual([]);
  });
});

// ─── Property + edge-case pins for the unpinned corners of the suite ──
describe('rot13 — alphabet behavior pins (current implementation quirks)', () => {
  test('uppercase-only round-trip is involutory (rot13∘rot13 == identity)', () => {
    const upper = 'HELLO WORLD! 123 ZEBRAS XYLOPHONE.';
    expect(rot13(rot13(upper))).toBe(upper);
  });

  test('Z wraps to M and A wraps to N (full alphabet boundary check)', () => {
    expect(rot13('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('NOPQRSTUVWXYZABCDEFGHIJKLM');
  });

  test('punctuation and digits pass through unchanged', () => {
    expect(rot13('!@# 0123456789 ?')).toBe('!@# 0123456789 ?');
  });

  test('lowercase input is corrupted — pins current uppercase-only behavior', () => {
    // The implementation assumes [A-Z] (code-65 / 90 anchors).
    // Lowercase letters match the regex but the math produces non-letter chars.
    // This test pins the bug so refactors don't silently change it without
    // updating callers; the public README only documents uppercase usage.
    expect(rot13('a')).not.toBe('n');
    expect(rot13('hello')).toBe('[X__b');
  });
});

describe('compare (rock-paper-scissors) — full 3x3 matrix coverage', () => {
  test('rock vs paper -> paper wins', () => {
    expect(compare('rock', 'paper')).toBe('paper wins');
  });

  test('paper vs scissors -> scissors wins', () => {
    expect(compare('paper', 'scissors')).toBe('scissors wins');
  });

  test('scissors as choice1 falls through current branching and returns undefined', () => {
    // Pins the implementation gap: only choice1 in {rock, paper} is handled.
    // scissors-as-choice1 yields undefined regardless of choice2.
    expect(compare('scissors', 'rock')).toBeUndefined();
    expect(compare('scissors', 'paper')).toBeUndefined();
  });

  test('all three ties return the same canonical message', () => {
    expect(compare('rock', 'rock')).toBe('The result is a tie!');
    expect(compare('paper', 'paper')).toBe('The result is a tie!');
    expect(compare('scissors', 'scissors')).toBe('The result is a tie!');
  });
});

describe('diffArray — algebraic property pins', () => {
  test('identity: diffArray(a, []) === a (and vice versa)', () => {
    expect(diffArray([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(diffArray([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('empty + empty = empty', () => {
    expect(diffArray([], [])).toEqual([]);
  });

  test('symmetric difference: every result element is in exactly one of the inputs', () => {
    const a = [1, 2, 3, 4];
    const b = [3, 4, 5, 6];
    const result = diffArray(a, b);
    for (const x of result) {
      const inA = a.includes(x);
      const inB = b.includes(x);
      expect(inA !== inB).toBe(true); // xor — never in both
    }
  });

  test('handles mixed types (string + number, no coercion)', () => {
    expect(diffArray(['1', 1], [1])).toEqual(['1']);
  });
});

// ─── Mutation / coercion / boundary pins for under-covered corners ───────
describe('slasher — mutation contract pins', () => {
  test('mutates the input array in place (same reference returned)', () => {
    // The implementation uses arr.shift() and returns arr, so callers
    // sharing the array see their copy clobbered. Pin this so any future
    // refactor to a non-mutating slice() is intentional, not silent.
    const input = [1, 2, 3, 4];
    const result = slasher(input, 2);
    expect(result).toBe(input);          // identity, not deepEqual
    expect(input).toEqual([3, 4]);       // input is now the tail
  });

  test('howMany > arr.length returns empty array (over-shift no-op)', () => {
    expect(slasher([1, 2], 5)).toEqual([]);
  });
});

describe('bouncer — type-specific falsy semantics', () => {
  test('strips NaN but keeps the string "0" (typeof guards on number)', () => {
    // The isNaN check is gated by typeof === 'number'; "0" is a non-empty
    // string so it survives bouncer despite being falsy-ish.
    expect(bouncer([NaN])).toEqual([]);
    expect(bouncer(['0', 'false', NaN])).toEqual(['0', 'false']);
  });

  test('keeps the number 1 and the string "1" together', () => {
    expect(bouncer([0, '0', 1, '1', false, 'false'])).toEqual(['0', 1, '1', 'false']);
  });
});

describe('destroyer — argument coercion contract', () => {
  test('uses == (loose) equality, so 1 removes "1" and null removes undefined', () => {
    // Pin: the filter uses == not ===; 1 == "1" and null == undefined
    // both evaluate true, so passing the number 1 strips out the string "1"
    // and passing null strips both null AND undefined.
    expect(destroyer([1, '1', 2, '2', null, undefined], 1, null)).toEqual([2, '2']);
  });

  test('removing nothing returns the array unchanged (but a new copy from filter)', () => {
    const input = [1, 2, 3];
    const result = destroyer(input);
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(input);  // filter() always returns a new array
  });
});

describe('getIndexToIns — sort-in-place mutation + boundary pins', () => {
  test('mutates the input array (sorted ascending) as a side effect', () => {
    // arr.sort() with a comparator sorts in place; pin that callers passing
    // an already-sorted array see no change but unsorted arrays are mutated.
    const input = [10, 5, 1];
    getIndexToIns(input, 0);
    expect(input).toEqual([1, 5, 10]);  // input reordered ascending
  });

  test('returns 0 when num is smaller than every element', () => {
    expect(getIndexToIns([10, 20, 30], 1)).toBe(0);
  });

  test('returns array length when num is larger than every element', () => {
    expect(getIndexToIns([2, 5, 10], 15)).toBe(3);
  });

  test('on tie (num == element), returns insertion index AFTER all equals', () => {
    // The strict-greater comparison (num > arr[i]) doesn't bump index on
    // equality, so num=5 in [3,5] inserts BEFORE the matching 5, at index 1.
    expect(getIndexToIns([3, 5], 5)).toBe(1);
  });
});

describe('mutation — empty-input edge pins', () => {
  test('empty libstr (arr[1]) yields true vacuously (zero-iteration loop)', () => {
    // No letters in libstr -> nothing to look up -> loop body never runs ->
    // returns the final `true`. Pin so anyone tightening the check is forced
    // to update callers that rely on the vacuous-truth shortcut.
    expect(mutation(['abc', ''])).toBe(true);
  });

  test('non-empty libstr against empty checkstr returns false', () => {
    expect(mutation(['', 'abc'])).toBe(false);
  });
});
