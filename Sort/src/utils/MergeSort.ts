let order = [];

const merge = (blocksCopy, start, mid, end) => {
  let i = start;
  let j = mid + 1;

  const arr = [];

  while (i <= mid && j <= end) {
    order.push([i, j, null, null]); // Compare i th and j th element
    if (blocksCopy[i] <= blocksCopy[j]) {
      arr.push(blocksCopy[i++]);
    } else {
      arr.push(blocksCopy[j++]);
    }
  }

  while (i <= mid) {
    order.push([i, null, null, null]);
    arr.push(blocksCopy[i++]);
  }

  while (j <= end) {
    order.push([null, j, null, null]);
    arr.push(blocksCopy[j++]);
  }

  for (i = start; i <= end; i++) {
    blocksCopy[i] = arr[i - start];
    order.push([i, null, blocksCopy.slice(), null]);
  }
};

const mergeSortHelper = (blocksCopy: number[], start: number, end: number) => {
  if (start >= end) {
    return;
  } //returns if the array has one or less element
  const mid = Math.floor((start + end) / 2); // gets the middle index
  // console.log("doing the recursive");

  //the array will be divided in two
  mergeSortHelper(blocksCopy, start, mid); //left side of the array
  mergeSortHelper(blocksCopy, mid + 1, end); //right side of the array

  merge(blocksCopy, start, mid, end);
};

const mergeSort = (blocks: number[]) => {
  order = [];
  const blocksCopy = blocks.slice(); // copying blocks array

  mergeSortHelper(blocksCopy, 0, blocksCopy.length - 1);

  for (let i = 0; i < blocksCopy.length; i++) {
    order.push([null, null, null, i]); // i th element will be in correct position
  }

  return order;
};

export default mergeSort;
