import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export type color =
  | "success.main"
  | "text.disabled"
  | "warning.main"
  | "info.main";
export interface PropsElement {
  content: number;
  color: color;
}

export default function Element({ content, color }: PropsElement) {
  return (
    <Card
      sx={{
        width: 60,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: `${color}`,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
