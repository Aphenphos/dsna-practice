import {
    makePet
} from './objects.js';

const test = QUnit.test;

QUnit.module('objects');

test('makes a pet', (expect) => {
    const actual = makePet(
        'felix',
        'cat',
        '6',
        'tuna',
        ['feather chaser', 'laser pointer', 'ball of yarn']\
    );
    expect.deepEqual(actual, {
    });

});