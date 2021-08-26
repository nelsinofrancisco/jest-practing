const { expect } = require('@jest/globals');
const capitalizer = require('../functions/capitalizer.js');

test('Capitalization test', () => 
  {
    let testString = 'cthulhu';
    let capitalizeLeter = 'Cthulhu';

    expect(capitalizer(testString)).toEqual(capitalizeLeter);
  }
);