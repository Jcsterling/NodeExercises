function removeDuplicates(arr) { 
  return [...new Set(arr)];
}
console.log(removeDuplicates(arr = ["Dingus", "jim", "jim"]));

// The Set object lets you store unique values of any type. so Set will automatically remove duplicates.



function removeDuplicates2(arr) { 
  return  arr.filter((i,j) => arr.indexOf(i) === j);
}
console.log(removeDuplicates2(arr = ["Dingus", "jim", "jim", "mike"]));