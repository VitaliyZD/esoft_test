function deepCopy(obj, visited = new WeakMap()) {

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (visited.has(obj)) {
        return visited.get(obj);
    }

    let copy = Array.isArray(obj) ? [] : {};

    visited.set(obj, copy);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key], visited);
        }
    }

    return copy;
}

let obj = {
    a: 1,
    b: { c: 2 },
    c: function() {
        console.log(123);
    },
    d: [3, 4],
};

let copiedObj = deepCopy(obj);
console.log(copiedObj);