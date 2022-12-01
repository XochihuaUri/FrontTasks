// import "./App.css";
// import React, { useState } from "react";
// import ArrayOfElements, { ElementObject } from "./components/ArrayOfElements";
// import RowOfArrays from "./components/RowOfArrays";
// import ButtonContain from "./components/ButtonContain";
// //import RowOfArrays from "./components/RowOfArrays";
// //import { mergeSort } from "./utils/MergeSort";

// function App() {
//   const array = [
//     { content: 12, color: "info.main" },
//     { content: 31, color: "info.main" },
//     { content: 25, color: "info.main" },
//     { content: 27, color: "info.main" },
//     { content: 8, color: "info.main" },
//     { content: 2, color: "info.main" },
//   ];

//   return (
//     <div className="App">
//       <ArrayOfElements arrayOfElements={array} />
//     </div>
//   );
// }

// export default App;

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
import { useState, useEffect } from "react";
import "./App.css";
import ListBlocks from "./components/ListBlocks";
// Algorithms
import mergeSort from "./utils/MergeSort";

function App() {
  // Generating shuffled array of 1 to len
  const generateRandomArray = (len: any) => {
    setCompleted(false);
    setSorting(false);
    setSortedIndex([]);

    const randomArray = Array.from(Array(len + 1).keys()).slice(1);

    for (let i = randomArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i - 1));
      const temp = randomArray[i];

      randomArray[i] = randomArray[randomIndex];
      randomArray[randomIndex] = temp;
    }

    setBlocks(randomArray);
  };

  // States
  const algo = "mergeSort";
  const [len, setLength] = useState(15);
  const [blocks, setBlocks] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [speed, setSpeed] = useState(250);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sortedIndex, setSortedIndex] = useState([]);

  // Generating random array every time the length is changed by th user
  useEffect(() => {
    generateRandomArray(len);
  }, [len]);

  // Sorting according to the algorithm
  const handleSort = () => {
    const sortAccOrder = (order: any) => {
      (function loop(i) {
        setTimeout(function () {
          const [j, k, arr, index] = order[i];
          setCompare([j, k]);
          setSwap([]);

          if (index !== null) {
            setSortedIndex((prevState) => [...prevState, index]);
          }

          if (arr) {
            setBlocks(arr);
            if (j !== null || k != null) setSwap([j, k]);
          }

          if (++i < order.length) {
            loop(i);
          } else {
            setSorting(false);
            setCompleted(true);
          }
        }, speed);
      })(0);
    };

    setSorting(true);

    algo === "mergeSort"
      ? sortAccOrder(mergeSort(blocks))
      : (() => {
          setSorting(false);
          setCompleted(true);
        })();
  };

  const handleBtn = () => {
    generateRandomArray(20);
  };

  const handleLength = () => {
    setLength(10);
  };
  //sorting | o completed se ponen en disable btns
  return (
    <div className="App">
      <ListBlocks
        blocks={blocks}
        compare={sorting && compare}
        swap={sorting && swap}
        sorted={sortedIndex}
      />
      <button onClick={() => handleSort()}>Sort</button>
      <button onClick={handleBtn}>Random</button>
      <button onClick={() => handleLength()}>Length</button>
    </div>
  );
}

export default App;
