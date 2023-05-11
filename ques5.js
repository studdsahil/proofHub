let array = ["car" ,"bikes" ,"snooty"];
array.push("bus");//add element in an array
console.log(array);
//pop() : removes the last element of the array
array.shift(); // removes 1st element of the array
console.log(array);
array.splice(index,1) // returned the removed elements and modify the original array
array.slice(0) // returned the brand new array containing element of original array
