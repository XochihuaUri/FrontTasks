import { Stack } from "@mui/material";
import { useState, useEffect } from "react";

function ListBlocks({ blocks, compare, sorted, swap }) {
  return (
    <Stack direction="column" spacing={2} justifyContent="space-around">
      {blocks.map((block, i) => {
        const width = (block * 500) / blocks.length;
        let bg = "white";

        // i th element is being compared with some other element
        if (compare && (i === compare[0] || i === compare[1])) {
          bg = "#ffff50";
        }

        if (swap && (i === swap[0] || i === swap[1])) {
          bg = "red";
        }
        // i th element is in its correct position
        if (sorted && sorted.includes(i)) {
          bg = "#4bc52e";
        }

        const style = {
          backgroundColor: bg,
          color: "black",
          height: "25px",
          width: width,
        };
        return (
          <div key={i} className="block" style={style}>
            {block}
          </div>
        );
      })}
    </Stack>
  );
}

export default ListBlocks;
