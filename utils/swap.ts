function swap(array: Array<string>, int1: number, int2: number): void {
  if (array[int1] === undefined || array[int2] === undefined) {
    throw new Error(`
          int1 is ${int1} - ${array[int1]}
          int2 is ${int2} - ${array[int2]}
      `);
  }

  const oldInt1: string = array[int1];

  array[int1] = array[int2];
  array[int2] = oldInt1;
}

export default swap;
