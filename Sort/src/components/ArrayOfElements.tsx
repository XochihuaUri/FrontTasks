import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import ButtonContain from "./ButtonContain";
import Element, { color, PropsElement } from "./Element";

interface Props {
  arrayOfElements: ElementObject[];
}

export default function ArrayOfElements({ arrayOfElements }: Props) {
  const [array, setArray] = useState(
    convertToArrayOfComponent(arrayOfElements)
  );

  const handleSort = () => {
    setArray((prev) => mergeSort(prev));
  };
  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        marginBottom={4}
      >
        {array}
      </Stack>
      <ButtonContain onClick={handleSort}>Sort</ButtonContain>
    </div>
  );
}

export interface ElementObject {
  content: number;
  color: color;
}

interface myObject {
  props: PropsElement;
  key: string;
  type: any;
}

const merge = (left: myObject[], right: myObject[]) => {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0].props.content < right[0].props.content) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  const arrayMerged = [...sortedArr, ...left, ...right];

  return arrayMerged;
};

const mergeSort = (arrayOfElementObjects: myObject[]): myObject[] => {
  if (arrayOfElementObjects.length <= 1) return arrayOfElementObjects;
  let mid = Math.floor(arrayOfElementObjects.length / 2);
  // Recursive calls
  let left = mergeSort(arrayOfElementObjects.slice(0, mid));
  let right = mergeSort(arrayOfElementObjects.slice(mid));

  return merge(left, right);
};
const convertToArrayOfComponent = (arrayExample: ElementObject[]) => {
  const array = arrayExample.map((element, index) => (
    <Element content={element.content} color={element.color} key={index} />
  ));

  return array;
};

// let arrayExample = arrayOfElements.map((element, index) => (
//   <Element content={element.content} color={element.color} key={index} />
// ));
// console.log(typeof arrayExample);
// console.log(arrayExample);
// console.log(arrayExample[0]);
// console.log(arrayExample[0].props);
// console.log(arrayExample[0].props.content);
// console.log(arrayExample[0].props.color);
// console.log(arrayExample[0].key);
