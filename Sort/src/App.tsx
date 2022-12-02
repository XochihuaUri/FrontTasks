import { useState, useEffect } from "react";
import "./App.css";
import ListBlocks from "./components/ListBlocks";
import Panel from "./components/Panel";
import { Box } from "@material-ui/core";
// Algorithms
import mergeSort from "./utils/MergeSort";
const speed = 300;

function App() {
  // Generating shuffled array of 1 to len
  const generateRandomArray = (len: any) => {
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

  const [len, setLength] = useState(4);
  const [blocks, setBlocks] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [compare, setCompare] = useState([]);
  //const [compareWhoIsHigher, setCompareWhoIsHigher] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sortedIndex, setSortedIndex] = useState([]);

  // Generating random array every time the length is changed by th user
  useEffect(() => {
    generateRandomArray(len);
  }, [len]);
  console.log(blocks);

  // Sorting according to the algorithm
  //order is an array of type null|number|number[]
  const handleSort = () => {
    const sortOrder = (order: any[]) => {
      (function loop(i) {
        setTimeout(function () {
          const [j, k, arr, index] = order[i];
          setCompare([j, k]);
          setSwap([]);
          //const e = await sleep(600);

          //setCompareWhoIsHigher([j, k]);
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
          }
        }, speed);
      })(0);
    };
    //console.log(blocks);
    console.log(mergeSort(blocks));
    setSorting(true);
    sortOrder(mergeSort(blocks));
  };

  const handleRandom = () => {
    generateRandomArray(10);
  };

  const handleLength = () => {
    setLength(10);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: "40px",
          backgroundColor: "#666",
          borderRadius: "8px",
        }}
      >
        <ListBlocks
          blocks={blocks}
          compare={sorting && compare}
          swap={sorting && swap}
          sorted={sortedIndex}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "60%",
          justifyContent: "space-around",
          marginTop: "60px",
        }}
      >
        <Panel
          handleSort={handleSort}
          handleLength={handleLength}
          handleRandom={handleRandom}
          sorting={sorting}
        />
      </Box>
    </Box>
  );
}

export default App;
