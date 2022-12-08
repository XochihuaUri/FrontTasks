import { useState } from "react";
import { sleep } from "../utils/sleeper";
import { Box } from "@material-ui/core";
import Element from "../components/Element";
import ButtonContain from "../components/Button";

interface ExampleProps {
  arrayToSort: number[];
  speed: number;
}

export default function Example({ arrayToSort, speed }: ExampleProps) {
  const [array, setArray] = useState<any>([]);
  const [mergeHistory, setMergeHistory] = useState<any>([]);
  const [merged, setMerged] = useState<any>([]);
  const [sortedArray, setSortedArray] = useState<any>([]);
  const [leftArray, setLeftArray] = useState<any>([]);
  const [rightArray, setRightArray] = useState<any>([]);
  const [sorting, setSorting] = useState(false);

  async function merge(
    left: (number | undefined)[],
    right: (number | undefined)[]
  ): Promise<(number | undefined)[]> {
    let sortedArr = []; // the sorted items will go here
    setLeftArray(left);
    setRightArray(right);
    await sleep(speed);
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      //if(typeof left == )
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
        await sleep(speed);
        setSortedArray([sortedArr]);
        await sleep(speed);
      } else {
        sortedArr.push(right.shift());
        setRightArray(right);
        await sleep(speed);
        setSortedArray([sortedArr]);
        await sleep(speed);
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    let arrayToReturn = [...sortedArr, ...left, ...right];
    for (const element of arrayToReturn) {
      setMerged((prev: number[]) => [...prev, element]);
      await sleep(speed);
    }
    await sleep(speed);
    setLeftArray([]);
    setRightArray([]);
    setSortedArray([]);
    await sleep(speed);
    setMerged([]);

    const mergedArrayToHistory = [...arrayToReturn];
    setMergeHistory((prev: number[]) => [...prev, mergedArrayToHistory]);
    await sleep(speed);

    return arrayToReturn;
  }

  async function mergeSort(arr: number[]): Promise<(number | undefined)[]> {
    // Base case
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    // Recursive calls
    let left = await mergeSort(arr.slice(0, mid));
    let right = await mergeSort(arr.slice(mid));
    let b = await merge(left, right);

    return b;
  }

  const handleClick = async () => {
    setArray([]);
    setMergeHistory([]);
    setSorting((prev) => !prev);
    const finalArray = await mergeSort(arrayToSort);
    setArray(finalArray);
    setSorting((prev) => !prev);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          boxSizing: "border-box",
          paddingTop: "62px",
        }}
      >
        <Box>
          <h1>Initial</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {arrayToSort.map((element: number, index: number) => (
              <Element content={element} color="secondary.main" key={index} />
            ))}
          </Box>
        </Box>
        <Box>
          <h1>Left Arr</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {leftArray.map((element: number, index: number) => (
              <Element content={element} color="info.main" key={index} />
            ))}
          </Box>
        </Box>
        <Box>
          <h1>Right Arr</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {rightArray.map((element: number, index: number) => (
              <Element content={element} color="info.main" key={index} />
            ))}
          </Box>
        </Box>
        <Box>
          <h1>Helper Arr</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {sortedArray.map((element: number[]) => {
              if (Array.isArray(element)) {
                const array = element.map((subElement, index) => {
                  return (
                    <Element
                      content={subElement}
                      color="info.main"
                      key={index}
                    />
                  );
                });

                return array;
              }
              return "";
            })}
          </Box>
        </Box>
        <Box>
          <h1>Merging</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {merged.map((element: number[], index: number) =>
              Array.isArray(element) ? (
                element.map((subElement: number, index: number) => {
                  <Element
                    content={subElement}
                    color="success.main"
                    key={index}
                  />;
                })
              ) : (
                <Element content={element} color="success.main" key={index} />
              )
            )}
          </Box>
        </Box>
        <Box>
          <h1>Merge history</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {mergeHistory.map((element: number, index: number) => (
              <Element content={element} color="warning.main" key={index} />
            ))}
          </Box>
        </Box>
        <Box>
          <h1>Final Arr</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {array.map((element: number, index: number) => (
              <Element content={element} color="info.main" key={index} />
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonContain onClick={handleClick} text={"Sort"} disable={sorting} />
      </Box>
    </div>
  );
}
