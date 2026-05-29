const { getSubTotal, wordBlanks, lookUpProfile } = require('../lib/utils');

describe('getSubTotal', () => {
  test('calculates subtotal for 1 item', () => {
    expect(getSubTotal(1)).toBe(7.5);
  });

  test('calculates subtotal for multiple items', () => {
    expect(getSubTotal(3)).toBe(22.5);
  });

  test('returns 0 for no items', () => {
    expect(getSubTotal(0)).toBe(0);
  });
});

describe('wordBlanks', () => {
  test('joins words with hyphens', () => {
    expect(wordBlanks('dog', 'big', 'ran', 'quickly')).toBe('dog-big-ran-quickly');
  });

  test('handles different inputs', () => {
    expect(wordBlanks('cat', 'small', 'jumped', 'slowly')).toBe('cat-small-jumped-slowly');
  });
});

describe('lookUpProfile', () => {
  const contacts = [
    {
      firstName: 'Akira',
      lastName: 'Laine',
      number: '0543236543',
      likes: ['Pizza', 'Coding', 'Brownie Points'],
    },
    {
      firstName: 'Harry',
      lastName: 'Potter',
      number: '0994372684',
      likes: ['Hogwarts', 'Magic', 'Hagrid'],
    },
    {
      firstName: 'Sherlock',
      lastName: 'Holmes',
      number: '0487345643',
      likes: ['Intriguing Cases', 'Violin'],
    },
  ];

  test('returns property value for existing contact and property', () => {
    expect(lookUpProfile(contacts, 'Akira', 'likes')).toEqual([
      'Pizza',
      'Coding',
      'Brownie Points',
    ]);
  });

  test('returns number for existing contact', () => {
    expect(lookUpProfile(contacts, 'Harry', 'number')).toBe('0994372684');
  });

  test('returns "No Such Property." for missing property', () => {
    expect(lookUpProfile(contacts, 'Sherlock', 'email')).toBe('No Such Property.');
  });

  test('returns "No such contact." for missing contact', () => {
    expect(lookUpProfile(contacts, 'Bob', 'number')).toBe('No such contact.');
  });
});

// ─── Boundary + property pins added for ALL utils ─────────────────
describe('getSubTotal: numeric edge cases', () => {
  test('large item count scales linearly', () => {
    expect(getSubTotal(1000)).toBe(7500);
  });

  test('fractional item count yields fractional subtotal', () => {
    expect(getSubTotal(0.5)).toBe(3.75);
  });

  test('negative item count yields negative subtotal (no implicit clamp)', () => {
    expect(getSubTotal(-2)).toBe(-15);
  });

  test('NaN input produces NaN (no silent zero coercion)', () => {
    expect(Number.isNaN(getSubTotal(NaN))).toBe(true);
  });
});

describe('wordBlanks: edge cases', () => {
  test('empty strings still yield correct shape with three hyphens', () => {
    expect(wordBlanks('', '', '', '')).toBe('---');
  });

  test('whitespace inputs are preserved as-is (no trim)', () => {
    expect(wordBlanks('a ', ' b', 'c d', ' e ')).toBe('a - b-c d- e ');
  });
});

describe('lookUpProfile: error-shape pins', () => {
  const contacts = [
    { firstName: 'Akira', likes: ['Pizza'], number: '0' },
  ];

  test('returns "No such contact." (with trailing period) when firstName missing', () => {
    expect(lookUpProfile(contacts, 'Ghost', 'likes')).toBe('No such contact.');
  });

  test('returns "No Such Property." (capitalized, trailing period) on missing key', () => {
    expect(lookUpProfile(contacts, 'Akira', 'address')).toBe('No Such Property.');
  });

  test('case-sensitive match: lowercase variant of firstName not found', () => {
    expect(lookUpProfile(contacts, 'akira', 'likes')).toBe('No such contact.');
  });

  test('empty contacts list always returns "No such contact."', () => {
    expect(lookUpProfile([], 'Akira', 'likes')).toBe('No such contact.');
  });
});
