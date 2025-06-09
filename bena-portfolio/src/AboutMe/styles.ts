import styled from "styled-components";

export const Container = styled.section`
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }
`

export const Image = styled.div`
  img{
    max-width: 500px;
  }
`;