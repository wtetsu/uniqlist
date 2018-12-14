const UniqList = require("../src/uniqlist");

test("", () => {
  const ul = new UniqList();
  expect(ul.array.length).toEqual(0);

  ul.push(10);
  ul.push(11);
  ul.push(12);

  expect(ul.size()).toEqual(3);
  expect(ul.get(0)).toEqual(10);
  expect(ul.get(1)).toEqual(11);
  expect(ul.get(2)).toEqual(12);

  ul.push(11);
  ul.push(12);
  ul.push(13);
  expect(ul.get(3)).toEqual(13);

  expect(ul.size()).toEqual(4);

  ul.push("11");
  ul.push("12");
  ul.push("13");

  expect(ul.size()).toEqual(7);

  ul.toArray()[0] = 999;
  expect(ul.get(0)).toEqual(10);
});

test("", () => {
  const ul = new UniqList();
  expect(ul.size()).toEqual(0);

  ul.push({ msg: "hello!" }, 10);
  ul.push({ msg: "hello!!" }, 10);
  ul.push({ msg: "hello!!!" }, 10);

  expect(ul.size()).toEqual(1);
  expect(ul.array[0].msg).toEqual("hello!");

  ul.merge([{ msg: "hello?" }, { msg: "hello??" }], [11, 12]);

  expect(ul.size()).toEqual(3);
  expect(ul.array[0].msg).toEqual("hello!");
  expect(ul.array[1].msg).toEqual("hello?");
  expect(ul.array[2].msg).toEqual("hello??");
});

test("", () => {
  const ul = new UniqList();
  ul.filter = (e, k) => e % 2 == 0;

  expect(ul.size()).toEqual(0);

  ul.push(41);
  ul.push(43);
  ul.push(45);

  expect(ul.size()).toEqual(0);

  ul.push(46);

  expect(ul.size()).toEqual(1);
  expect(ul.array[0]).toEqual(46);
});

test("", () => {
  const ul = new UniqList();
  ul.filter = a => a % 2 == 0;
  expect(ul.array.length).toEqual(0);

  ul.push(1);
  ul.push(3);
  ul.push(5);

  expect(ul.array.length).toEqual(0);

  ul.push(1);
  ul.push(2);
  ul.push(3);
  ul.push(4);

  expect(ul.array.length).toEqual(2);
  expect(ul.array[0]).toEqual(2);
  expect(ul.array[1]).toEqual(4);
});
