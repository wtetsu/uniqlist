# UniqArray

## Install

```
npm install uniqarray
```

## How to use

```js
const UniqArray = require("uniqarray");

const ua = new UniqArray();
ua.push(10);
ua.push(10);
ua.push(11);
ua.push(11);
ua.push(11);

ua.size(); // 2
ua.get(0); // 10
ua.get(1); // 11

const arr = ua.toArray(); // a normal array
```

```js
const ua = new UniqArray();
ua.push({ msg: "hello!" }, "key10");
ua.push({ msg: "hello!!" }, "key10");
ua.push({ msg: "hello!!!" }, "key10");
ua.push({ msg: "hello?" }, "key11");
ua.push({ msg: "hello??" }, "key11");
ua.push({ msg: "hello???" }, "key11");

ua.size(); // 2
ua.get(0).msg; // "hello!"
ua.get(1).msg; // "hello?"

const arr = ua.toArray(); // a normal array
```
