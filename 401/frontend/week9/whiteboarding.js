10/19
MERgE SORT


const mergeSort = items => {
  let output = []
  if(items.length < 2) return itemsif(items.length === 2) return items[0] < items[1] : items reverse(){

  let middle = Math.floor(items.length /2)
  let left = mergeSort(items.slice(0, middle))
  let right = mergeSort(items.slice(middle))

  while(left.length || right.length){
    if(left.length && !right.length){
      output.push(...left)
      break
    }
    if(!left.length && right.legth){
      output.push(...right) //spread the right
      break
    }
    left[0] <= right[0] ? output.push(left.shift()) : output.push(right.shift())//comparing the indexes of 0 for each side (left and right) and then pushing the biggest one to the output array
  }
}
}

const mergeSort = items => {
  let output = []
  if(items.length < 2) return items
  if(items.length === 2) return items[0] < items[1] ? items : items.reverse()

  let middle = Math.floor(items.length / 2)
  let left = mergeSort(items.slice(0, middle))
  let right = mergeSort(items.slice(middle))

  while(left.length || right.length) {
    if(left.length && !right.length) {
      output.push(...left)
      break
    }
    if(!left.length && right.length) {
      output.push(...right)
      break
    }
    left[0] <= right[0] ? output.push(left.shift()) : output.push(right.shift())
  }
  return output
}

mergeSort([20, 4, 33, 100, 1, 23, 89, 18, 5])
