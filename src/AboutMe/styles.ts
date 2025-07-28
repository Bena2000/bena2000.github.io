import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
`
export const Title = styled.h1`
  margin-top: 1rem;
  color: var(--blue);
  font-size: 25px;
`;

export const EduactionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EducationContainer = styled.div`
  display: flex; 
  flex-direction: row;
  gap: 10px;
`;

export const FieldOfStudy = styled.h2`
  font-size :25px;
`;

export const UniversityName = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
`;

export const EduactionTime = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
`;