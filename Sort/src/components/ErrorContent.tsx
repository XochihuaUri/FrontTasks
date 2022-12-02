import { Box } from "@mui/system";
import Photo from "./Photo";
import dog1 from "../assets/img/sadDog1.png";
import Typography from "@mui/material/Typography";
import dog2 from "../assets/img/sadDog2.png";
import dog3 from "../assets/img/sadDog3.png";
import dog4 from "../assets/img/sadDog4.png";
import dog5 from "../assets/img/sadDog5.png";
import dog6 from "../assets/img/sadDog6.png";

export interface ErrorRoute {
  status: number;
  statusText: string;
  data: string;
}

export interface ErrorProps {
  errorRoute: ErrorRoute;
}

export default function ErrorContent(errorRoute: ErrorProps) {
  const { status, statusText, data } = errorRoute.errorRoute;
  const dogs = [dog1, dog2, dog3, dog4, dog5, dog6];
  const dog = dogs[Math.floor(Math.random() * dogs.length)];

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box data-testid="errorImg">
        <Photo src={dog} width={370} height={300} />
      </Box>
      <Box
        sx={{
          height: "30vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        data-testid="errorData"
      >
        <Typography variant="h3" sx={{ color: "white" }}>
          {status}
        </Typography>
        <Typography variant="h3" sx={{ color: "white" }}>
          {statusText}
        </Typography>
        <Typography variant="h4">{data}</Typography>
      </Box>
    </Box>
  );
}
