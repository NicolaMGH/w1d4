var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];



var result = input.map(function(twoSides) {
  x = Math.pow((twoSides.x), 2);
  y = Math.pow((twoSides.y), 2);
  var z = x + y;
  // x =
  // console.log(`x = ${x}, y = ${y}, and z = ${z}.`);
  return Math.sqrt(z);
  // console.log(twoSides.x);
});

// console.log(result);


// console.log(result[0]);
// console.log(result[1]);
// console.log(result[2]);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);