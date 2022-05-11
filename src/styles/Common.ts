import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;

  height: calc(100% - 4rem);

  margin: 0 auto;
  padding: 0 2rem 4rem 2rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Main = styled.div`
  background-color: var(--white-100);
  border-radius: 1rem;
  
  width: 100%;
  max-width: 800px;

  margin: -3.2rem auto 3.2rem auto;
  padding: 6.4rem 2.4rem 0 2.4rem;

  fieldset {
    border: none;
    padding: 0 2.4rem;

    & + fieldset {
      margin-top: 6.4rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px 20px;

  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
