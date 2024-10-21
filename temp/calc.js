//

let lastKey = 0;
let basic = 0;

function calc(input) {
  // let operator = '';
  // let num = 0
  // // const stackOfWholeOperation = [];
  // const stackOfPart = [];
  // // 7 -> 7*10+8 -> 78
  // // [78, '/', ]

  // let hasMultiOrDivide = false;
  // // 2 + 4 * 3 * 2
  // // [2, '+', 4, '*', 3]

  // update last
  lastKey = input;

  switch (input) {
    case typeof input === "number":
      if (typeof lastKey === "number") {
        basic += input;
      } else {
        if (["+", "-"].includes(input)) {
        } else if (["*", "/"].includes(input)) {
        }
      }
      break;
    case typeof input === "string":
      if (typeof lastKey === "number") {
        if (["+", "-"].includes(input)) {
        } else if (["*", "/"].includes(input)) {
        }
      } else {
        // continous operator
        if (["*", "/"].includes(input)) {
          // calc intime
        } else if (["+", "-"].includes(input)) {
          //
        }
      }
  }
  basic += input;
  // A: input is still number
  basic = basic * 10 + input;

  // B: input is operator
}
