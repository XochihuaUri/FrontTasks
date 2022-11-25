import axios from "axios";

const restar = (a: number, b: number): number => {
  return a - b;
};

console.log(restar(5, 2));

const fetch = async () => {
  const response = await axios.get(
    "https://quiz-jala.azurewebsites.net/api/v1/quizzes"
  );
  return response.data;
};

console.log(fetch());
