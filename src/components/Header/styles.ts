import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: linear-gradient(106.54deg, var(--alpha-primary) -1.24%, var(--alpha-secondary) 107.1%);

  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem 2rem;

  button {
    height: 3.4rem;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
    margin: 0 auto;
  }
`;

export const ContentHeader = styled.div`
  width: 90%;
  margin: 3.2rem auto 5rem auto;
  position: relative;

  h2 {
    font: 600 3rem Poppins;
    color: var(--white-100);
    line-height: 4.2rem;
    max-width: 45rem;
  }

  p {
    max-width: 35rem;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.5rem;
    color: var(--white-100);
    margin-top: 2.4rem;
    opacity: 0.8;
  }

  button {
    margin-top: 2rem;

    background-color: var(--white-100);
    height: 30px;
    padding: 0 2rem;

    font-size: 1.3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;
    transition: filter 0.2s;

    svg {
      margin-right: 0.4rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (min-width: 700px) {
    max-width: 800px;
    margin: 3.2rem auto 10rem auto;

  }
`;