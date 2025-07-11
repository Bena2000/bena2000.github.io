import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--blue);
  }

  h3{
    margin-top: 2rem;
    color: var(--blue);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

`