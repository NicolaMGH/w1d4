// The second argument/parameter is expected to be a function
var counter = 0;

function findWaldo(arr, found) {
  arr.forEach(function(i){
    //console.log(i)

    if (i === "Waldo") {
      found(counter);
    } else {
      counter++
    }
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);






// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }