import swap from "./swap";

const heapSort = (arr: Array<string>): Array<string> => {
  arr = arr.slice();
  for (let i: number = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    shiftDown(arr, i, arr.length);
  }
  for (let i: number = arr.length - 1; i >= 1; i--) {
    swap(arr, 0, i);
    shiftDown(arr, 0, i);
  }
  return arr;
};
const shiftDown = (arr: Array<string>, i: number, j: number): void => {
  let done: boolean = false;
  let maxChild: number;
  while (i * 2 + 1 < j && !done) {
    if (i * 2 + 1 === j - 1) {
      maxChild = i * 2 + 1;
    } else if (arr[i * 2 + 1] > arr[i * 2 + 2]) {
      maxChild = i * 2 + 1;
    } else {
      maxChild = i * 2 + 2;
    }
    if (arr[i] < arr[maxChild]) {
      swap(arr, i, maxChild);
      i = maxChild;
    } else {
      done = true;
    }
  }
};

export default heapSort;
