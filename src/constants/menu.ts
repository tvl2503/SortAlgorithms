import { BubbleSort } from "../../utils/bubbleSort";
import MergeSort from "../../utils/mergeSort";
import heapSort from "./../../utils/heapSort";
import { insertionSort } from "./../../utils/insertionSort";
import { quickSort } from "./../../utils/quickSort";
interface Option {
  value: number;
  label: string;
}

export const OPTIONS: Option[] = [
  {
    value: 0,
    label: "Bubble Sort",
  },
  {
    value: 1,
    label: "Quick Sort",
  },
  {
    value: 2,
    label: "Merge Sort",
  },
  {
    value: 3,
    label: "Heap Sort",
  },
  {
    value: 4,
    label: "Insertion Sort",
  },
];

export const ALGORITHMS = [
  {
    name: "Bubble Sort",
    description: "",
    sort: BubbleSort,
  },
  {
    name: "Quick Sort",
    description: "",
    sort: quickSort,
  },
  {
    name: "Merge Sort",
    description: "",
    sort: MergeSort,
  },
  {
    name: "Heap Sort",
    description: "",
    sort: heapSort,
  },
  {
    name: "Insertion Sort",
    description: "",
    sort: insertionSort,
  },
];
