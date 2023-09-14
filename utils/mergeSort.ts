const mergeSort = (arr: Array<string>): Array<string> => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
};

const merge = (left: Array<string>, right: Array<string>): Array<string> => {
  const result: Array<string> = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
};

export default mergeSort;
