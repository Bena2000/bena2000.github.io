import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
  padding: 1rem;
  overflow: hidden;
`;

export const Project = styled.div`
  padding: 2rem 1.8rem;
  background-color: #2b2b2b;
  border-radius: 1.2rem;
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #FFF;
  &:hover{
    transform: translateY(-5px);
    background-color:rgb(63, 63, 63);
  }    
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--blue);
  margin-bottom: 3.6rem;

  a > img {
    width: 5.0rem;
  }
`;

export const ProjectLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h3`
  font-size: 25px;
  margin-top: 1rem;
  margin-bottom: 3rem;
  text-align: center;
  text-transform: capitalize;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  letter-spacing: 0.12rem;
  margin-bottom: 2rem;

  a{
    text-align: justify;
    color: #FFFF;
    transition: color 0.25s;
    &:hover{
      color: var(--blue);
    }
  }

  img{
    max-width: 500px;
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.4rem;
  opacity: 0.6;
`;

export const TechList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.4rem;
  opacity: 0.6;
`;