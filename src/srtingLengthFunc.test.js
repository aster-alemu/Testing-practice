const stringLength = require('./srtingLengthFunc');
const ReverseString = require('./srtingLengthFunc');
test('to check equality', () =>{
  expect('Hello world').toEqual('Hello world');
});

test ('to check unequality of string', () =>{
  expect('hello').not.toEqual('olleh');
})