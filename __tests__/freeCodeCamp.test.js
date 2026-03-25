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
