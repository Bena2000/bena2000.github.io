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

export const Body = styled.div`
  h3{
    margin-bottom: 2rem;
  }

  p{
    display: grid;
    grid-template-columns: auto auto;
    gap: 15px;
    letter-spacing: 0.12rem;
    margin-bottom: 2rem;

    a{
      text-align: justify;
      color: #FFFF;
      border-bottom: 1px solid var(--blue);
      transition: color 0.25s;
      &:hover{
        color: var(--blue);
      }
    }

    img{
      max-width: 500px;
    }
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  .tech-list{
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.4rem;
  opacity: 0.6;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--blue);
  margin-bottom: 3.6rem;

  .project-links{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a > img {
    width: 5.0rem;
  }
`;