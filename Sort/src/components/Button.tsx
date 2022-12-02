import { default as ButtonFromMUI } from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

interface Props {
  onClick: () => void;
  text: string;
  disable: boolean;
}

export default function Button({ onClick, text, disable }: Props) {
  return (
    <>
      {disable ? (
        <LoadingButton
          sx={{
            bgcolor: "#777",
            color: "white",
            fontSize: "30px",
          }}
          size="large"
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          data-testid="buttonDisable"
        >
          Sorting
        </LoadingButton>
      ) : (
        <ButtonFromMUI
          variant="contained"
          onClick={onClick}
          size="large"
          sx={{ fontSize: "30px" }}
          data-testid="buttonAble"
        >
          {text}
        </ButtonFromMUI>
      )}
    </>
  );
}
