var myFn = function() {
  //console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

runner(myFn



//another way to do the waldo callback function
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(result) {
  console.log("The result is:", result);
});