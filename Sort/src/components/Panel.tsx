import React from "react";
import ButtonContain from "./Button";
interface PanelProps {
  handleSort: () => void;
  handleRandom: () => void;
  handleLength: () => void;
  sorting: boolean;
}

export default function Panel({
  handleSort,
  handleRandom,
  handleLength,
  sorting,
}: PanelProps) {
  return (
    <>
      <ButtonContain
        onClick={() => handleSort()}
        text={"Sort"}
        disable={sorting}
      />
      <ButtonContain
        onClick={() => handleRandom()}
        text={"Random"}
        disable={sorting}
      />
      <ButtonContain
        onClick={() => handleLength()}
        text={"Length"}
        disable={sorting}
      />
    </>
  );
}
