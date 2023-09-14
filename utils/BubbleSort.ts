type TypeArr = Array<string>;

export const BubbleSort = (arr: TypeArr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], [arr[j + 1]]] = [arr[j + 1], [arr[j]]];
      }
    }
  }
  return arr;
};
