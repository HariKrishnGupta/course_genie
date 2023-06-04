import styled from "styled-components";

export const Container = styled.div`
  margin: 25px;
`;
export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const LeftContainer = styled.div`
  width: 50%;
  margin-right: 25px;
`;
export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
`;
export const YearContainer = styled.div`
  border: 1px solid black;
  margin-bottom: 10px;
  width: 100%;
  padding: 5px;
  h2 {
    font-size: 20px;
    margin: 5px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  border-radius: 10px;
`;
export const CourseContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  border-radius: 10px;
  padding: 5px 0px;
  margin: 5px 0px;
`;
export const JobsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid black;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  text-align: center;
  padding-bottom: 10px;
  flex-wrap: row;
`;
