import { Box } from "@mui/material";

interface PhotoProps {
  width: number | string;
  height: number | string;
  src: string;
}

export default function Photo({ width, height, src }: PhotoProps) {
  return (
    <>
      <Box
        component="img"
        sx={{
          height: height,
          width: width,
        }}
        alt="The house from the offer."
        src={src}
        data-testid="photo"
      />
    </>
  );
}
