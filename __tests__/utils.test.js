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
