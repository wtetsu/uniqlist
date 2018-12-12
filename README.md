# UniqList

[![Build Status](https://travis-ci.org/wtetsu/uniqlist.svg?branch=master)](https://travis-ci.org/wtetsu/uniqlist)
[![Code Climate](https://codeclimate.com/github/wtetsu/uniqlist/badges/gpa.svg)](https://codeclimate.com/github/wtetsu/uniqlist)

## Install

```
npm install uniqlist
```

## How to use

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

const arr = ul.toArray(); // a normal array
```

```js
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

const arr = ul.toArray(); // a normal array
```
