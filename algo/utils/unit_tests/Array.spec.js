require('../Array')

const assertConsole = (expect, result) =>  {
  console.log(`it should be ${expect}`, result);
}

const map = new Map();
map.set(0, 0);
const res1 = map.containsKey(0);
assertConsole(true, res1);

const res2 = map.containsKey();
assertConsole(false, res2);

const res3 = map.containsKey('0');
assertConsole(false, res3);