import App from "../App";
import NavBar from "../components/NavBar";
import Example from "./Example";

const arrayToSort = [9, 8, 1, 2, 7, 3, 6, 5, 4];
const speed = 1000;
export default function SortPage() {
  return (
    <>
      <NavBar />
      <Example arrayToSort={arrayToSort} speed={speed} />
    </>
  );
}
