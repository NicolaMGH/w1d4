//new code 
// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((element, index) => {
    let name = names[index];
    if (name === "Waldo") {
      found([index]);   // execute callback
    }
  });
}

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//old code
/*// The second argument/parameter is expected to be a function
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
//   }*/
