import { Stack } from "@mui/material";

function ListBlocks({
  blocks,
  compare,
  sorted,
  swap,
  compareWhoIsHigher,
}: any) {
  return (
    <Stack direction="column" spacing={2} justifyContent="space-around">
      {blocks.map((block: any, index: any) => {
        const width = (block * 800) / blocks.length;
        let bg = "white";
        let color = "black";

        // i th element is being compared with some other element
        if (compare && (index === compare[0] || index === compare[1])) {
          bg = "yellow";
        }

        //i th compare if it is swapping place
        if (swap && (index === swap[0] || index === swap[1])) {
          bg = "#2196f3";
        }

        // i th element is in its correct position
        if (sorted && sorted.includes(index)) {
          bg = "#4bc52e";
          color = "#fff";
        }

        const style = {
          backgroundColor: bg,
          color: color,
          height: "30px",
          width: width,
          padding: "5px 10px",
          fontSize: "22px",
          fontWeight: "700",
        };
        return (
          <div key={index} className="block" style={style}>
            {block}
          </div>
        );
      })}
    </Stack>
  );
}

export default ListBlocks;
