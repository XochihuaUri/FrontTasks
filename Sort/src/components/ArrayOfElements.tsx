import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Element, { color } from "./Element";
export interface ElementObject {
  content: number;
  color: color;
}

interface Props {
  arrayOfElements: ElementObject[];
}

export default function ArrayOfElements({ arrayOfElements }: Props) {
  const [array, setArray] = useState(arrayOfElements);
  useEffect(() => {
    console.log(arrayOfElements);
    setArray(arrayOfElements);
  }, [arrayOfElements]);
  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        marginBottom={4}
      >
        {array.map((element, index) => (
          <Element
            content={element.content}
            color={element.color}
            key={index}
          />
        ))}
      </Stack>
    </div>
  );
}
