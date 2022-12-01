import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface Props {
  onClick: () => void;
  text: string;
}

export default function ButtonContain({ onClick, text }: Props) {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-around">
      <Button variant="contained" onClick={onClick}>
        {text}
      </Button>
    </Stack>
  );
}
