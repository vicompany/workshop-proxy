# Introduction

You may have heard of the term proxy in another context. In networking, it’s not uncommon to connect to a server via a proxy—a device that passes your information to the server and vice-versa. It sits in between the two ends of a connection.

The JavaScript `Proxy` is quite similar: it sits between a an object and it’s consumer. In other words, the `Proxy` is wrapped around an object. Any object, I might add. `Object`s, `Array`s, `Function`s, everything that qualifies as a JavaScript object.

When an operation is performed on the JavaScript object, this operation is passed to the `Proxy` and handled. In a proxy handler, a user can choose to pass the operation through. Or not.

```js
const myObject = {
    answer: 42,
    message: 'Hello World',
};

const myAngryObject = new Proxy(myObject, {
    get(target, property, receiver) {
        // Get the value from the target object
        const value = Reflect.get(target, property, receiver);

        // When the value is a string, modify it
        if (typeof value === 'string') {
            return value.toUpperCase();
        }

        // Pass the value through
        return value;
    },
});

console.log(myObject.answer); // 42
console.log(myObject.message); // "Hello World"

console.log(myAngryObject.answer); // 42
console.log(myAngryObject.message); // "HELLO WORLD"
```

Enough talk. Let’s code! Move to [Exercise 1](/exercises/1.md).