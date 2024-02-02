// if-else-if
if (2 === "2") {
  console.log("sonu mondal");
} else if (true) {
  console.log("wrong");
} else {
}
// comparison operator
// >, <, >=, <=, !=, ==(only check the value of both side), ===(check value and type of data of both side), !==

// Logical operator
// &&, ||, !

// ternary opeartor
true ? console.log("true") : console.log("false");

// switch-case
switch (5) {
  case 5:
    break;

  default:
    break;
}

// false value
// false, undefined, null, nan, BigInt(on), 0, -0, ""

// true value
// "0", "false", " ", [], {}, function(){}

// nullish coalescing operator (??) , null and undefined

console.log("?? operator");
const a = 5 ?? 10;
console.log(a);

const b = 5 ?? null;
console.log(b);

const c = null ?? 10;
console.log(c);

const d = 5 ?? undefined;
console.log(d);

const e = undefined ?? 10;
console.log(e);

const f = null ?? undefined;
console.log(f);

const g = undefined ?? null;
console.log(g);

console.log("| operator\n");
const h = 5 | 10;
console.log(h);

const i = 5 | null;
console.log(i);

const j = null | 10;
console.log(j);

const k = 5 | undefined;
console.log(k);

const l = undefined | 10;
console.log(l);

const m = null | undefined;
console.log(m);

const n = undefined | null;
console.log(n);