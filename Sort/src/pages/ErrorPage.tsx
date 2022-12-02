import { useRouteError } from "react-router-dom";
import ErrorContent from "../components/ErrorContent";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <ErrorContent errorRoute={error} />
    </>
  );
}
