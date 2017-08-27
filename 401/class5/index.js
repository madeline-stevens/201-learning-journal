
//Big-O O(1) constant...an O of 1 lookups...can go directly to a thing. we don't have to interate which gnereally means we're looking at an obejct. ""

function findVal(obj, keyOne, keyTwo) {
  return {
    name: obj[keyTwo],
    age: obj[keyTwo]
  }
}

//Big-O - O(n) Linear...given an input I have to do n number of things to get to a thing. we are going to have n number of steps- n being the length of the array.

function findEle(arr, val){
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val) return i
  }
  return null
}

//Big-O - O(n^2)

//Big-O - O(log n)

//Big-O - O(2^n)
