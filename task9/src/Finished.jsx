import styled from "styled-components";
import Button from "./Button";
import Nav from "./Nav";

function Finished() {
  return (
    <Main>
      <Nav />
      <FinishedContent>
        <FinishedImg src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" />
        <InfoContainer>
          <H1>Your answers have been sent</H1>
          <P>
            When we have your results we will send you a reply to your email
            address.
          </P>
          <Button input="Go to home"></Button>
        </InfoContainer>
      </FinishedContent>
    </Main>
  );
}

const Main = styled.div`
  height: 100%;
  width: 100%;
`;

const FinishedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 90vh;
  @media (min-width: 768px) {
    padding-top: 30px;
    height: 100%;
  }
`;

const FinishedImg = styled.img`
  width: 80%;
  height: 40%;
  max-height: 400px;
  @media (min-width: 768px) {
    width: 30%;
    height: 40%;
    max-height: 250px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  width: 80%;
  height: 50%;
  border-radius: 5px;
  padding: 10px 10px;
  @media (min-width: 768px) {
    width: 40%;
    height: 40%;
    border-radius: 50px;
    padding: 30px 30px;
    justify-content: center;
  }
`;
const H1 = styled.h1`
  margin-top: 0;
  padding-top: 0;
  text-align: center;
  font-size: 1.8rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
const P = styled.p`
  font-size: 1rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default Finished;
