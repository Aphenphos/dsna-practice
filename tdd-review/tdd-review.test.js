import {
    returnFirstKeyLastValue,
    thing,
    thirdItem,
    thirdItemEmpty,
} from './tdd-review.js';

const test = QUnit.test;

QUnit.module('tdd-review');

test('array length', (expect) => {
    const array = [];
    const expected = 0;
    const actual = thing(array);

    expect.equal(actual, expected);
});

test('return 3rd array item', (expect) => {
    const array = [1, 2, 3];
    const expected = 3;
    const actual = thirdItem(array);

    expect.equal(actual, expected);
});

test('return 3rd array and if empty print empty', (expect) => {
    const array = [1, 2];
    const expected = 'empty';
    const actual = thirdItemEmpty(array);

    expect.equal(actual, expected);
});

test('return array of keys', (expect) => {
    const obj = {
        name: 'felix',
        type: 'cat',
        food: 'tuna',
        age: 6,
    };
    const expected = {
        firstKey: 'name',
        lastValue: 6 
    };

    const actual = returnFirstKeyLastValue(obj);

    expect.deepEqual(actual, expected);
    
});

