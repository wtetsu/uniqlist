# UniqList

[![Build Status](https://travis-ci.org/wtetsu/uniqlist.svg?branch=master)](https://travis-ci.org/wtetsu/uniqlist)
[![Code Climate](https://codeclimate.com/github/wtetsu/uniqlist/badges/gpa.svg)](https://codeclimate.com/github/wtetsu/uniqlist)
[![npm version](https://badge.fury.io/js/uniqlist.svg)](https://badge.fury.io/js/uniqlist)

## Install

```
npm install uniqlist
```

## How to use

### Example 1

```js
const UniqList = require("uniqlist");
const ul = new UniqList();

ul.push(10);
ul.push(10);
ul.push(11);
ul.push(11);
ul.push(11);

ul.size(); // 2
ul.get(0); // 10
ul.get(1); // 11

const arr = ul.toArray(); // [10, 11]
```

### Example 2

```js
const UniqList = require("uniqlist");
const ul = new UniqList();

ul.push({ msg: "hello!" }, "key10");
ul.push({ msg: "hello!!" }, "key10");
ul.push({ msg: "hello!!!" }, "key10");
ul.push({ msg: "hello?" }, "key11");
ul.push({ msg: "hello??" }, "key11");
ul.push({ msg: "hello???" }, "key11");

ul.size(); // 2
ul.get(0).msg; // "hello!"
ul.get(1).msg; // "hello?"

const arr = ul.toArray(); // [{ msg:"hello!"}, { msg:"hello?"}]
```

### Example 3

```js
const ul = new UniqList();
ul.filter = a => a % 2 == 0;

ul.push(1);
ul.push(3);
ul.push(5);

ul.size(); // 0

ul.push(1);
ul.push(2);
ul.push(3);
ul.push(4);

ul.size(); // 2

const arr = ul.toArray(); // [2, 4]
```
