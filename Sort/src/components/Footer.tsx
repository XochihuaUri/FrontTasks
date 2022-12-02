import { Box } from "@material-ui/core";
import { IconButton } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const github = "https://github.com/XochihuaUri/FrontTasks/tree/a/Sort";

export default function Footer() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center" }}
      data-testid="footer"
    >
      <IconButton
        aria-label="delete"
        size="large"
        color="primary"
        onClick={() => alert("Nope")}
        data-testid="facebookIcon"
      >
        <FacebookRoundedIcon
          fontSize="inherit"
          sx={{ height: 50, width: 50 }}
        />
      </IconButton>
      <IconButton
        aria-label="delete"
        size="large"
        color="primary"
        sx={{ margin: "0 50px" }}
        onClick={() => alert("Tampoco")}
        data-testid="emailIcon"
      >
        <EmailRoundedIcon fontSize="inherit" sx={{ height: 50, width: 50 }} />
      </IconButton>
      <IconButton
        aria-label="delete"
        size="large"
        color="primary"
        onClick={() => window.location.replace(github)}
        data-testid="codeIcon"
      >
        <CodeRoundedIcon fontSize="inherit" sx={{ height: 50, width: 50 }} />
      </IconButton>
    </Box>
  );
}
