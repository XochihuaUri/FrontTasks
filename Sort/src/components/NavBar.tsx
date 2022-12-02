import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">Merge Sort</Typography>

          <Box sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              onClick={() => navigate("/")}
              sx={{ marginRight: "20px" }}
            >
              Home
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => navigate("/app")}
              sx={{ marginRight: "20px" }}
            >
              App
            </IconButton>
            <IconButton color="inherit" onClick={() => navigate("/moreAbout")}>
              More About
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
