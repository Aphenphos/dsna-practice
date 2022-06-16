export function thing(array) {
    return array.length;
}

export function thirdItem(array) {
    return array[2];
}

export function thirdItemEmpty(array) {
    if (array[2] === undefined) return 'empty';
}

export function returnFirstKeyLastValue(obj) {
    const keys = Object.keys(obj);
    const firstKey = keys[0];
    const lastKey = keys[keys.length - 1];
    const lastValue = obj[lastKey];
    return [firstKey, lastValue];
}