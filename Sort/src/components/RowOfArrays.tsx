import Stack from "@mui/material/Stack";
//import ArrayOfElements from "./ArrayOfElements";

// interface Props {
//   arrayOfArrays: number[][];
// }
//{ arrayOfArrays }: Props

export default function RowOfArrays() {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="space-around">
        {/* {arrayOfArrays.map((array) => (
          <ArrayOfElements arrayOfElements={array} />
        ))} */}
      </Stack>
    </div>
  );
}
