const UniqList = require("../src/uniqlist");

test("", () => {
  const ua = new UniqList();
  expect(ua.array.length).toEqual(0);

  ua.push(10);
  ua.push(11);
  ua.push(12);

  expect(ua.size()).toEqual(3);
  expect(ua.get(0)).toEqual(10);
  expect(ua.get(1)).toEqual(11);
  expect(ua.get(2)).toEqual(12);

  ua.push(11);
  ua.push(12);
  ua.push(13);
  expect(ua.get(3)).toEqual(13);

  expect(ua.size()).toEqual(4);

  ua.push("11");
  ua.push("12");
  ua.push("13");

  expect(ua.size()).toEqual(7);

  ua.toArray()[0] = 999;
  expect(ua.get(0)).toEqual(10);
});

test("", () => {
  const ua = new UniqList();
  expect(ua.size()).toEqual(0);

  ua.push({ msg: "hello!" }, 10);
  ua.push({ msg: "hello!!" }, 10);
  ua.push({ msg: "hello!!!" }, 10);

  expect(ua.size()).toEqual(1);
  expect(ua.array[0].msg).toEqual("hello!");

  ua.merge([{ msg: "hello?" }, { msg: "hello??" }], [11, 12]);

  expect(ua.size()).toEqual(3);
  expect(ua.array[0].msg).toEqual("hello!");
  expect(ua.array[1].msg).toEqual("hello?");
  expect(ua.array[2].msg).toEqual("hello??");
});

test("", () => {
  const ua = new UniqList();
  ua.filter = (e, k) => e % 2 == 0;

  expect(ua.size()).toEqual(0);

  ua.push(41);
  ua.push(43);
  ua.push(45);

  expect(ua.size()).toEqual(0);

  ua.push(46);

  expect(ua.size()).toEqual(1);
  expect(ua.array[0]).toEqual(46);
});

test("", () => {
  const ua = new UniqList();
  ua.filter = a => a % 2 == 0;
  expect(ua.array.length).toEqual(0);

  ua.push(1);
  ua.push(3);
  ua.push(5);

  expect(ua.array.length).toEqual(0);

  ua.push(1);
  ua.push(2);
  ua.push(3);
  ua.push(4);

  expect(ua.array.length).toEqual(2);
  expect(ua.array[0]).toEqual(2);
  expect(ua.array[1]).toEqual(4);
});
