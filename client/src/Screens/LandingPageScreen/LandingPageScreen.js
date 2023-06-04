import React from "react";
import {
  Container,
  LandingPageContainer,
  YearContainer,
  CourseContainer,
  LeftContainer,
  RightContainer,
  JobsCardsContainer,
} from "./LandingPageScreen.styles";
import NavBar from "../components/NavBar/NavBar";
import { mockData, jobmockData } from "../_mock_data/defaultMockData";
const LandingPageScreen = () => {
  return (
    <>
      <NavBar />
      <Container>
        <LandingPageContainer>
          <LeftContainer>
            {mockData.map((item, index) => {
              return (
                <YearContainer>
                  <div>
                    <h2>Year {index + 1}</h2>
                    <button>Add</button>
                  </div>

                  {item.map((items, indexs) => {
                    return <CourseContainer>{items}</CourseContainer>;
                  })}
                </YearContainer>
              );
            })}
          </LeftContainer>
          <RightContainer>
            {jobmockData.map((items, index) => {
              return (
                <JobsCardsContainer>
                  <h3>{items[1]}</h3>
                  <p>{items[2]}</p>
                </JobsCardsContainer>
              );
            })}
          </RightContainer>
        </LandingPageContainer>
      </Container>
    </>
  );
};

export default LandingPageScreen;
