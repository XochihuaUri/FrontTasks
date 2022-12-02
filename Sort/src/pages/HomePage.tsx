import { Box } from "@mui/system";
import NavBar from "../components/NavBar";
import Photo from "../components/Photo";
import Typography from "@mui/material/Typography";
import ButtonContain from "../components/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const img =
  "https://www.programiz.com/sites/tutorial2program/files/merge-sort-example_0.png";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          height: "90vh",
        }}
      >
        <Photo width={600} height={500} src={img} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: 550,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: "800",
                marginBottom: "30px",
              }}
            >
              Welcome to the sort merge app
            </Typography>
            <Typography variant="h5">
              This app will let you understand the sort merge algorithm
            </Typography>
          </Box>

          <ButtonContain
            onClick={() => navigate("/app")}
            text="Go to the app"
            disable={false}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
