import "./App.css";
import React, { useState } from "react";
import ArrayOfElements, { ElementObject } from "./components/ArrayOfElements";
import RowOfArrays from "./components/RowOfArrays";
import ButtonContain from "./components/ButtonContain";
//import RowOfArrays from "./components/RowOfArrays";
//import { mergeSort } from "./utils/MergeSort";

function App() {
  const array = [
    { content: 12, color: "info.main" },
    { content: 31, color: "info.main" },
    { content: 25, color: "info.main" },
    { content: 27, color: "info.main" },
    { content: 8, color: "info.main" },
    { content: 2, color: "info.main" },
  ];

  return (
    <div className="App">
      <ArrayOfElements arrayOfElements={array} />
    </div>
  );
}

export default App;

// const merge = (left: ElementObject[], right: ElementObject[]) => {
//   let sortedArr = [];
//   let i = 0; // the sorted items will go here
//   //console.log("entrando al merge");
//   while (left.length && right.length) {
//     //console.log(left);
//     //console.log(right);
//     //console.log(sortedArr);
//     // Insert the smallest item into sortedArr
//     if (left[0].content < right[0].content) {
//       sortedArr.push(left.shift());
//       // sortedArr[i]!.color = "success.main";
//       // right[0].color = "text.disabled";
//       i++;
//     } else {
//       sortedArr.push(right.shift());
//       // sortedArr[i]!.color = "success.main";
//       // left[0].color = "text.disabled";
//       // i++;
//     }
//   }
//   //console.log("Final");
//   //console.log(left);
//   //console.log(right);
//   //console.log(sortedArr);
//   // Use spread operators to create a new array, combining the three arrays
//   const arrayMerged = [...sortedArr, ...left, ...right];
//   //console.log("array merged");
//   //console.log(arrayMerged);
//   //console.log("saliendo del merge");
//   return arrayMerged;
// };

// const mergeSort = (
//   arrayOfElementObjects: ElementObject[]
// ): ElementObject[] => {
//   // Base case
//   //console.log("entrando al merge sort");
//   //console.log(arrayOfElementObjects);
//   if (arrayOfElementObjects.length <= 1) return arrayOfElementObjects;
//   let mid = Math.floor(arrayOfElementObjects.length / 2);
//   // Recursive calls
//   let left = mergeSort(arrayOfElementObjects.slice(0, mid));
//   let right = mergeSort(arrayOfElementObjects.slice(mid));
//   //console.log("saliendo del merge sort");
//   return merge(left, right);
// };
