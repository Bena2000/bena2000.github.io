import styled from "styled-components";

export const Container = styled.section`
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8rem;
  background: rgba(0,0,0,0);
  font-size: 1.8rem;
  .text{
    & > p{
      font-size: 1.8rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }
`

export const Name = styled.h1`
  font-size: 7rem;
`;

export const Title = styled.h1`
  margin-top: 1rem;
  color: var(--blue);
  font-size: 25px;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  img{
    width: 100%;
    max-width: 500px;
  }
`;